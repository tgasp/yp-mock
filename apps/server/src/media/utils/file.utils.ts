export function getFileExtensionFromMimeType(mime: string) {
  const exts = {
    'image/jpg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/jpeg': 'jpeg',
    'image/gif': 'gif',
    'video/mp4': 'mp4',
  };

  return exts[mime];
}
