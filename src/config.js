import { FiGithub, FiLink } from 'react-icons/fi'

const config = {
  name: 'Ricky Tang',
  title: "Ricky Tang",
  desc: 'Ricky Tang\'s blog',
  avatar: '/avatar.png',
  logo: '/logo.svg', // header 左侧 logo
  socials: [
    { label: 'Github', icon: <FiGithub className="text-lg" aria-hidden />, link: 'https://github.com/rickytjx' },
    { label: '友链', icon: <FiLink className="text-lg" aria-hidden />, link: '/blogroll' },
  ],
  blogroll: []
}

export default config
