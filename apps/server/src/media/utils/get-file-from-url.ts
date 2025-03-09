export async function getFileFromURL(url) {
  const response = await fetch(url);

  const blob = await response.blob();

  const type = blob.type;

  const arrayBuffer = await blob.arrayBuffer();

  const buffer = Buffer.from(arrayBuffer);

  return {
    buffer,
    type,
  };
}
