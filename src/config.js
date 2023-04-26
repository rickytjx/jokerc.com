import { FiGithub, FiLink, FiTwitter } from 'react-icons/fi'

const config = {
  name: 'Ricky Tang',
  title: "Ricky Tang",
  desc: 'Full-stack Developer / Open Sourceror / Blogger',
  avatar: '/avatar.png',
  logo: '/logo.png', // header 左侧 logo
  socials: [
    { label: 'Github', icon: <FiGithub className="text-lg" aria-hidden />, link: 'https://github.com/rickytjx' },
    { label: 'Twitter', icon: <FiTwitter className="text-lg" aria-hidden />, link: 'https://twitter.com/rickytjx' },
    { label: '友链', icon: <FiLink className="text-lg" aria-hidden />, link: '/blogroll' },
  ],
  blogroll: []
}

export default config
