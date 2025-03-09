import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MediaService } from './media.service';
import { MediaEntity } from './entities/media.entity';
import { MediaController } from './media.controller';
import { createStorageProvider } from './adapters/storage.provider';

@Module({
  imports: [TypeOrmModule.forFeature([MediaEntity])],
  controllers: [MediaController],
  providers: [
    MediaService,
    createStorageProvider()
  ],
  exports: [MediaService],
})
export class MediaModule {}
