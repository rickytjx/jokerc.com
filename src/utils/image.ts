import fs from 'node:fs/promises'
import path from 'node:path'
import { getPlaiceholder } from 'plaiceholder'

export async function getImageInfo(src: string) {
  const buffer = !src.startsWith('http')
    // eslint-disable-next-line node/prefer-global/process
    ? await fs.readFile(path.join(process.cwd(), './public', src))
    // eslint-disable-next-line node/prefer-global/buffer
    : await fetch(src).then(async res => Buffer.from(await res.arrayBuffer()))

  const {
    metadata: { height, width },
    base64,
  } = await getPlaiceholder(buffer, { size: 16 })

  return {
    src,
    width,
    height,
    lqip: base64,
  }
}
