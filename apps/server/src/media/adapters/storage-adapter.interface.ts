import IFileDetails from "src/media/adapters/file-details.interface";

export interface IStorageAdapter {
  store(file: Buffer, directory: string, filename?: string): Promise<IFileDetails>;

  getFile(filename: string): Promise<IFileDetails>;

  remove(filename: string): Promise<void>;

  getFileURL(filename: string): Promise<string>;

  getDirectoryContents(directory: string): Promise<any>;
}
