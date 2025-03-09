import { HttpException, HttpStatus } from '@nestjs/common';
import IFile from '../interfaces/file';
import { MessageResponse } from 'src/common/types/message.response';
import { getFileExtensionFromMimeType } from '../utils/file.utils';

const RULES = {
  maxSize: 500 * 1000,
  minSize: 1000,
  types: ['jpg', 'jpeg', 'png', 'mp4'],
};
const MESSAGES = {
  maxSize: `The file size is big. Acceptable maximum size is ${RULES.maxSize} kb.`,
  minSize: `The file size is small. Acceptable minimum size is ${RULES.maxSize} kb.`,
  types: `The file type is not Accepted. Acceptable types are ${RULES.types.join(', ')}.`,
};

export const fileValidation = (_, files, callback): void => {
  if (!Array.isArray(files)) {
    files = [files];
  }

  const errorCollector: string[] = [];

  for (const file of files) {
    if (!validationMedia.types(file)) {
      errorCollector.push(MESSAGES.types);
    }

    if (errorCollector.length) {
      return callback(
        new HttpException(
          new MessageResponse('Cannot create media.', true, errorCollector),
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  }

  callback(null, true);
};

const validationMedia = {
  maxSize: (file) => {
    return RULES.maxSize && RULES.maxSize < file.size / 1000;
  },
  minSize: (file) => {
    return RULES.minSize && RULES.minSize > file.size / 1000;
  },
  types: function (file: IFile) {
    return RULES.types.includes(getFileExtensionFromMimeType(file.mimetype));
  },
};
