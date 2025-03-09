import IFile from '../interfaces/file';

export class File implements IFile {
  originalname = '';
  filename = '';
  path = '';
  mimetype = '';
  extension = '';
  encoding = '';
  fieldname = '';
  destination = '';
  buffer: any;
  stream: any;
  size = 0;
}
