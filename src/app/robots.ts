import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/utils/url'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/',
    },
    sitemap: getSiteUrl('/sitemap.xml').href,
  }
}
