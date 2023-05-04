/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://jokerc.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
}

module.exports = config
