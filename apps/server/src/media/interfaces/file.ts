export default interface IFile extends Express.Multer.File {
  extension?: string;
}
