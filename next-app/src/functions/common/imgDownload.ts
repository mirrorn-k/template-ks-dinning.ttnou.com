import fs from 'fs';
import path from 'path';
import { URL } from 'url';
import log from '@/functions/common/logger';

export async function downloadImage(
  imageUrl: string,
  saveDir: string = 'public/ssr'
) {
  try {
    if (!imageUrl) {
      throw new Error('Invalid imageUrl: URL is undefined or null');
    }

    if (!imageUrl.startsWith('http')) {
      throw new Error(`Invalid imageUrl: ${imageUrl} (URL must be absolute)`);
    }

    const parsedUrl = new URL(imageUrl);
    const relativePath = path.join(...parsedUrl.pathname.split('/')); // パスを適切に結合
    const savePath = path.join(process.cwd(), saveDir, relativePath); // 絶対パスを構築

    if (fs.existsSync(savePath)) {
      log.debug(`🔹 Skipping already downloaded: ${savePath}`);
      return `/${saveDir}/${relativePath}`.replace(/\\/g, '/');
    }

    log.debug(`⬇️ Downloading: ${imageUrl} -> ${savePath}`);

    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch ${imageUrl}`);

    const buffer = Buffer.from(await response.arrayBuffer());

    fs.mkdirSync(path.dirname(savePath), { recursive: true });
    fs.writeFileSync(savePath, buffer);

    return `/${saveDir}/${relativePath}`.replace(/\\/g, '/');
  } catch (error) {
    log.debug(`❌ Error downloading image (${imageUrl}):`, error);
    return null;
  }
}
