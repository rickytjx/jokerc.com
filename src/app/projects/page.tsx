import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import styles from './styles.module.scss'
import DesktopOnly from '@/components/DesktopOnly'
import { ArrowRight } from '@/components/icons'

const projects = [
  {
    name: 'vscode-open-in-coding-button',
    desc: 'Add a button to go to the CODING on the status bar.',
    url: 'https://github.com/rickytjx/vscode-open-in-coding-button',
  },
  {
    name: 'jokerc.com',
    desc: 'My personal website',
    url: 'https://github.com/rickytjx/jokerc.com',
  },
  {
    name: 'vscode-settings',
    desc: 'My VS Code settings and extensions',
    url: 'https://github.com/rickytjx/vscode-settings',
  },
  {
    name: 'dotfiles',
    desc: 'My development environment and configuration',
    url: 'https://github.com/rickytjx/dotfiles',
  },
]

export default async function Projects() {
  return (
    <>
      <div className={clsx(styles.project, 'prose-container')}>
        <h2
          className={clsx(
            styles.title,
            'relative font-bold text-5xl my-10 sm:my-10 italic',
          )}
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 -mx-4 mt-6">
          {projects.map(project => (
            <Link
              className="group relative flex flex-col px-4 py-3 gap-1.5 rounded-xl sm:hover:bg-zinc-400/10 transition-colors"
              key={project.name}
              href={project.url}
              target="_blank"
            >
              <span className="font-medium">{project.name}</span>
              <span className="text-zinc-400 dark:text-zinc-500">{project.desc}</span>
              <DesktopOnly>
                <ArrowRight className="absolute right-2.5 bottom-2.5 text-zinc-300 dark:text-zinc-600 -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
              </DesktopOnly>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
