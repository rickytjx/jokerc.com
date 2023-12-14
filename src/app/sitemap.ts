import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/utils/url'
import { getLatestPosts } from '@/utils/post'

export const revalidate = 60

export default async function sitemap() {
  const staticMap = [
    {
      url: getSiteUrl('/').href,
      lastModified: new Date(),
    },
    {
      url: getSiteUrl('/tags').href,
      lastModified: new Date(),
    },
    {
      url: getSiteUrl('/about').href,
      lastModified: new Date(),
    },
    {
      url: getSiteUrl('/friends').href,
      lastModified: new Date(),
    },
  ] satisfies MetadataRoute.Sitemap

  const posts = await getLatestPosts()
  const dynamicMap = posts.map(post => ({
    url: getSiteUrl(`/posts/${post.slug}`).href,
    lastModified: new Date(),
  })) satisfies MetadataRoute.Sitemap

  return [...staticMap, ...dynamicMap]
}
