// import { FiRss } from 'react-icons/fi'

const config = {
  name: 'Ricky Tang',
  title: 'Ricky Tang',
  description: 'Full-stack Developer / Open Sourceror / Blogger',
  avatar: '/avatar.png',
  logo: '/logo.svg',
  siteUrl: 'https://www.jokerc.com',
  links: [
    { name: 'GitHub', link: 'https://github.com/rickytjx' },
    { name: 'X', link: 'https://twitter.com/rickytjx' },
    { name: 'RSS', link: '/feed.xml' },
  ],
  friends: [
    { name: '', link: '' },
  ],
  // rss: { label: 'RSS', icon: <FiRss className="text-2xl" aria-hidden />, link: 'https://jokerc.com/rss.xml' },
  language: 'en', // en | zh-CN
  // 侧边目录
  toc: true,
  // 显示上一篇下一篇按钮
  adjacentPosts: true,
  // 配置文章过时提醒阈值
  outdatedPostThresholdDays: 90,
  markdown: {
    // 统一配置 CodeBlock 是否显示行号，也可以在 frontmatter 中通过 lineNumbers 字段单独设置
    lineNumbers: false,
  },
  backToTopButton: true,
}

export default config
