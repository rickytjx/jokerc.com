import { promises as fs } from 'node:fs'
import { Feed } from 'feed'
import { getLatestPosts } from '@/utils/post'

const DOMAIN = 'https://jokerc.com'

export default async function generateRssFeed() {
  const allPosts = await getLatestPosts()
  const site_url = DOMAIN

  const feedOptions = {
    title: 'Ricky Tang | RSS Feed',
    description: 'Ricky Tang\' Blog',
    id: site_url,
    link: site_url,
    image: `${site_url}/avatar.png`,
    favicon: `${site_url}/favicon.svg`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Ricky Tang`,
    generator: 'https://github.com/jpmonette/feed',
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      // other feed formats
      json: `${site_url}/rss.json`,
      atom: `${site_url}/atom.xml`,
    },
  }

  const feed = new Feed(feedOptions)

  allPosts.forEach((post: any) => {
    feed.addItem({
      title: post.frontmatter.title,
      id: `${site_url}/posts/${post.slug}`,
      link: `${site_url}/posts/${post.slug}`,
      // description: post.description,
      date: new Date(post.frontmatter.date),
    })
  })

  fs.writeFile('./public/rss.xml', feed.rss2())

  // write other feed formats to public folder
  fs.writeFile('./public/rss.json', feed.json1())
  fs.writeFile('./public/atom.xml', feed.atom1())
}
