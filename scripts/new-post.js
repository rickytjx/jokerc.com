const fs = require('node:fs').promises
const path = require('node:path')
const dayjs = require('dayjs')
const pangu = require('pangu')

// npm run new:post name [tag1] [tag2] ...
async function createPost() {
  const [, , filename, ...tags] = process.argv

  await fs.writeFile(
    path.resolve(process.cwd(), `./posts/${dayjs().format('YYYY-MM-DD')}-${filename}.mdx`),
    `---
    title: '${pangu.spacing(filename)}'
    date: '${dayjs().format('YYYY-MM-DD HH:mm:ss')}'
    tags:${tags.map(tag => `\n  - '${tag}'`).join('')}
    ---
    `,
  )
}

createPost()
