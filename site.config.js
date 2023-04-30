import { FiGithub, FiLink, FiRss, FiTwitter } from 'react-icons/fi'

const config = {
  name: 'Ricky Tang',
  title: "Ricky Tang",
  desc: 'Full-stack Developer / Open Sourceror / Blogger',
  avatar: '/avatar.png',
  logo: '/logo.svg',
  socials: [
    { label: 'Github', icon: <FiGithub className="text-lg" aria-hidden />, link: 'https://github.com/rickytjx' },
    { label: 'Twitter', icon: <FiTwitter className="text-lg" aria-hidden />, link: 'https://twitter.com/rickytjx' },
    { label: '友链', icon: <FiLink className="text-lg" aria-hidden />, link: '/blogroll' },
  ],
  rss: { label: 'RSS', icon: <FiRss className="text-2xl" aria-hidden />, link: 'https://jokerc.com/rss.xml' },
  blogroll: [],
  language: 'zh-CN', // en | zh-CN
  toc: true, // table of content
  adjacentPosts: true, // prev next links
  markdown: {
    lineNumbers: false
  }
}

export default config
