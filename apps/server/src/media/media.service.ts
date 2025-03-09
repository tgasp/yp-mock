import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { MediaEntity } from './entities/media.entity';
import { MediaTypes } from './enums';
import { CreateMediaDTO } from './dto/create-media.dto';
import { UpdateMediaDTO } from './dto/edit-media.dto';
import { getFileFromURL } from './utils/get-file-from-url';
import * as imageThumbnail from 'image-thumbnail';
import { IStorageAdapter } from './adapters/storage-adapter.interface';
import { STORAGE_ADAPTER } from './adapters/storage.token';
import IFileDetails from 'src/media/adapters/file-details.interface';

@Injectable()
export class MediaService {
  constructor(
    @Inject(STORAGE_ADAPTER)
    private readonly storageAdapter: IStorageAdapter,
    @InjectRepository(MediaEntity)
    private readonly mediaRepository: Repository<MediaEntity>,
  ) {}

  public async findMany(ids: string[]): Promise<MediaEntity[]> {
    return await this.mediaRepository.find({ where: { id: In(ids) } });
  }

  public async findOne(id: string): Promise<MediaEntity> {
    const media = await this.mediaRepository.findOne({ where: { id } });

    if (!media) {
      throw new NotFoundException({
        message: `There is no such media with id: ${id}`,
      });
    }

    return media;
  }

  public async store(
    dto: CreateMediaDTO,
    buffer: Buffer,
  ): Promise<MediaEntity> {
    const mediaEntity = new MediaEntity();
    mediaEntity.type = MediaTypes[dto.type];
    mediaEntity.title = dto.title;
    mediaEntity.description = dto.description;

    const originalDetails: IFileDetails = await this.storageAdapter.store(
      buffer, 'original'
    );

    mediaEntity.original = originalDetails.name;

    if (dto.type === 'Image') {
      const file = await imageThumbnail(buffer, { width: 260 });

      const previewDetails: IFileDetails = await this.storageAdapter.store(
        Buffer.from(file.buffer), 'preview'
      );

      mediaEntity.preview = previewDetails.name;
    }

    const mediaWithId = await this.mediaRepository.save(mediaEntity);

    return await this.findOne(mediaWithId.id);
  }

  public async storeByStoragePath(path: string, details: CreateMediaDTO) {
    const mediaEntity = new MediaEntity();

    mediaEntity.type = MediaTypes[details.type];
    mediaEntity.title = details.title;
    mediaEntity.description = details.description;

    const fileUrl = await this.storageAdapter.getFileURL(path);
    const fetchedFile = await getFileFromURL(fileUrl);
    const buffer = fetchedFile.buffer;

    const file = await imageThumbnail(buffer, { width: 260 });

    const previewDetails: IFileDetails = await this.storageAdapter.store(
      Buffer.from(file.buffer), 'preview'
    );

    mediaEntity.original = path;
    mediaEntity.preview = previewDetails.name;

    return await this.mediaRepository.save(mediaEntity);
  }

  async getMediaFromURL(url: string): Promise<MediaEntity> {
    const fetchedFile = await getFileFromURL(url);
    const file = fetchedFile.buffer;

    const media: CreateMediaDTO = {
      type: 'Image',
    };

    return await this.store(media, file);
  }

  public async copy(id: string): Promise<MediaEntity> {
    const media = await this.findOne(id);

    const dto = new CreateMediaDTO();
    dto.description = media.description;
    dto.title = media.title;
    dto.type = media.type == 1 ? 'Image' : 'Video';

    const file = await this.storageAdapter.getFile(media.original!);

    const entity = await this.store(dto, file.buffer!);

    return await this.mediaRepository.save(entity);
  }

  public async update(
    id: string,
    editMediaDTO: UpdateMediaDTO,
  ): Promise<MediaEntity> {
    const media = await this.mediaRepository.findOne({ where: { id } });

    if (!media) {
      throw new NotFoundException({
        message: `Media not found with id:${id}.`,
      });
    }

    if (editMediaDTO.title) media.title = editMediaDTO.title;
    if (editMediaDTO.description) media.description = editMediaDTO.description;

    return await this.mediaRepository.save(media);
  }

  public async remove(id: string): Promise<void> {
    const media = await this.findOne(id);

    await this.mediaRepository.remove(media);
  }
}
