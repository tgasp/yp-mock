import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand, ListObjectsCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Readable } from 'stream';
import { IStorageAdapter } from '../storage-adapter.interface';
import ICloudflareConfig from './interfaces/cloudflare-config.interface';
import { lookup } from 'mime-types';
import IFileDetails from 'src/media/adapters/file-details.interface';

export class CloudflareStorageAdapter implements IStorageAdapter {
  private readonly s3Client: S3Client;
  private readonly config: ICloudflareConfig;

  constructor(config: ICloudflareConfig) {
    this.config = config;
    this.s3Client = new S3Client({
      region: 'auto',
      endpoint: `https://${config.accountId}.r2.cloudflarestorage.com`,
      credentials: { 
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
    });
  }

  async store(file: Buffer, directory: string, filename?: string): Promise<IFileDetails> {
    let finalFilename: string;
    if (filename) {
      finalFilename = filename;
    } else {
      // Generate random filename with proper extension
      const ext = 'bin'; // Default extension for binary files
      finalFilename = `${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`;
    }
    
    // Ensure the file has an extension even if provided filename doesn't have one
    if (!finalFilename.includes('.')) {
      const mime = lookup(finalFilename) || 'application/octet-stream';
      const ext = mime.split('/')[1];
      finalFilename = `${finalFilename}.${ext}`;
    }

    const key = directory ? `${directory}/${finalFilename}` : finalFilename;
    
    const mime = lookup(finalFilename) || 'application/octet-stream';

    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: this.config.bucketName,
        Key: key,
        Body: file,
        ContentType: mime,
      })
    );

    return {
      name: key,
      mime,
      buffer: file,
    };
  }

  async getFile(filename: string): Promise<IFileDetails> {
    const response = await this.s3Client.send(
      new GetObjectCommand({
        Bucket: this.config.bucketName,
        Key: filename,
      })
    );

    const mime = response.ContentType || 'application/octet-stream';
    let buffer: Buffer;

    if (response.Body instanceof Readable) {
      const chunks: Buffer[] = [];
      for await (const chunk of response.Body) {
        chunks.push(Buffer.from(chunk));
      }
      buffer = Buffer.concat(chunks);
    } else {
      throw new Error('Unexpected response body type');
    }

    return {
      name: filename,
      mime,
      buffer,
    };
  }

  async remove(filename: string): Promise<void> {
    await this.s3Client.send(
      new DeleteObjectCommand({
        Bucket: this.config.bucketName,
        Key: filename,
      })
    );
  }

  async getFileURL(filename: string): Promise<string> {
    // Get the actual object to determine its ContentType
    const objectInfo = await this.s3Client.send(
      new GetObjectCommand({
        Bucket: this.config.bucketName,
        Key: filename,
      })
    );

    const mime = objectInfo.ContentType || lookup(filename) || 'application/octet-stream';
    
    // Ensure filename has correct extension based on mime type
    const ext = mime.split('/')[1];
    const filenameWithExt = filename.includes('.') ? filename : `${filename}.${ext}`;

    const command = new GetObjectCommand({
      Bucket: this.config.bucketName,
      Key: filename,
      ResponseContentType: mime,
      ResponseContentDisposition: `inline; filename="${filenameWithExt}"`
    });
    
    return await getSignedUrl(this.s3Client, command, { expiresIn: 3600 }); // URL expires in 1 hour
  }

  async getDirectoryContents(directory: string): Promise<IFileDetails[]> {
    const response = await this.s3Client.send(
      new ListObjectsCommand({
        Bucket: this.config.bucketName,
        Prefix: directory,
      })
    );

    if (!response.Contents) {
      return [];
    }

    return response.Contents.map((object) => ({
      name: object.Key!,
      mime: lookup(object.Key!) || 'application/octet-stream',
    }));
  }
}