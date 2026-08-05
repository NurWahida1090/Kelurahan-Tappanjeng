export function driveImage(url?: string | null): string | undefined {
  if (!url || url.trim() === "") {
    return undefined;
  }

  let match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);

  if (match) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000&t=${Date.now()}`;
  }

  match = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);

  if (match) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000&t=${Date.now()}`;
  }

  return url;
}