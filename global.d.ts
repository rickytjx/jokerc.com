interface PostFrontmatter {
  title: string // 标题
  date: string // 创建日期
  updateOn?: string // 最后更新日期，git commit 之前会自动更新此字段
  tags?: string[] // 标签
  toc?: boolean // 侧边导航是否可见，默认为 true
  heroImage?: string // 顶部图片地址
  draft?: boolean // 为 true 则不会展示该文章
  isShare?: boolean // 是否开启分享，默认为 false
  shareUrl?: string // 分享链接
  [key: string]: any
}

interface PostReadingTime {
  minutes: number
  text: string
  time: number
  words: number
}

declare namespace Intl {
  function getCanonicalLocales(locales: string | string[]): string[]
}
