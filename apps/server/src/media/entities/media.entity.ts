import { AfterLoad, AfterRemove, Column, Entity } from 'typeorm';
import { MediaTypes } from '../enums/media-types';
import { AbstractEntity } from 'src/common/abstract.entity';
import { CloudflareStorageAdapter } from 'src/media/adapters/cloudflare-storage-adapter/cloudflare-storage.adapter';

require('dotenv').config();

const storageAdapter = new CloudflareStorageAdapter({
  accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
  accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID!,
  secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY!,
  bucketName: process.env.CLOUDFLARE_BUCKET_NAME!,
  publicUrl: process.env.CLOUDFLARE_PUBLIC_URL!,
});

@Entity('medias')
export class MediaEntity extends AbstractEntity {
  @AfterLoad()
  async updateCounters() {
    this.originalPath = await storageAdapter.getFileURL(this.original!);
    this.previewPath = await storageAdapter.getFileURL(this.preview!);
  }

  @Column('varchar', { default: null })
  title?: string;

  @Column('text', { default: null })
  description?: string;

  @Column({ type: 'enum', enum: MediaTypes })
  type: MediaTypes;

  @Column('varchar')
  original?: string;

  @Column('varchar', { default: null })
  preview?: string;

  originalPath?: string;

  previewPath?: string;

  @AfterRemove()
  async removeFiles() {
    await storageAdapter.remove(this.original!);
    await storageAdapter.remove(this.preview!);
  }
}
