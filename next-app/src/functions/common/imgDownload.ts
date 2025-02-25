import fs from 'fs'
import path from 'path'
import { URL } from 'url'
import log from '@functions/common/logger'

/**
 * 画像をダウンロードして指定ディレクトリに保存する
 * @param {string} imageUrl ダウンロードする画像のURL
 * @param {string} saveDir 保存先ディレクトリ（デフォルト: 'public/ssr'）
 * @returns {string|null} 保存した画像の相対パス or null（エラー時）
 */
export async function downloadImage(
  imageUrl: string,
  saveDir: string = 'public/ssr'
) {
  try {
    const parsedUrl = new URL(imageUrl)
    const relativePath = path.join(...parsedUrl.pathname.split('/')) // パスを適切に結合
    const savePath = path.join(process.cwd(), saveDir, relativePath) // 絶対パスを構築

    // 既にファイルが存在する場合はスキップ
    if (fs.existsSync(savePath)) {
      log.debug(`🔹 Skipping already downloaded: ${savePath}`)
      return `/${saveDir}/${relativePath}`.replace(/\\/g, '/') // Windowsでもパスを統一
    }

    log.debug(`⬇️ Downloading: ${imageUrl} -> ${savePath}`)

    // 画像を取得
    const response = await fetch(imageUrl)
    if (!response.ok) throw new Error(`Failed to fetch ${imageUrl}`)

    const buffer = Buffer.from(await response.arrayBuffer()) // `buffer()` の代わりに `arrayBuffer()`

    // 必要なディレクトリを作成
    fs.mkdirSync(path.dirname(savePath), { recursive: true })

    // 画像を保存
    fs.writeFileSync(savePath, buffer)

    return `/${saveDir}/${relativePath}`.replace(/\\/g, '/') // Windows対策
  } catch (error) {
    log.debug(`❌ Error downloading image (${imageUrl}):`, error)
    return null
  }
}
