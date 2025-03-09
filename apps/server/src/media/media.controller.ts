import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { MediaService } from './media.service';

import { CreateMediaDTO } from './dto/create-media.dto';
import { fileValidation } from './validations/file-validation';
import { UpdateMediaDTO } from './dto/edit-media.dto';

@ApiTags('Medias')
@Controller('media')
export class MediaController {
  constructor(private mediaService: MediaService) { }

  @Get('list/:mediaType')
  async findMany(@Param('mediaType') mediaType: string) {
    const types = {
      image: 1,
      video: 2,
    };

    const type = types[mediaType] || 1;

    return this.mediaService.findMany(type);
  }

  @Get('item/:id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.mediaService.findOne(id);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileValidation,
      limits: {
        fileSize: 500 * 1000 * 1000,
      },
    }),
  )
  @ApiConsumes('multipart/form-data')
  async store(
    @UploadedFile('file') file: Express.Multer.File,
    @Body() createMediaDTO: CreateMediaDTO,
  ) {
    return this.mediaService.store(createMediaDTO, file.buffer);
  }

  @Post('copy/:id')
  async copy(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.mediaService.copy(id);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() editMediaDTO: UpdateMediaDTO,
  ) {
    return this.mediaService.update(id, editMediaDTO);
  }

  @Delete(':id')
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.mediaService.remove(id);

    return {
      message: 'Media was successfully removed.',
    };
  }
}
