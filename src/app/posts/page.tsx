import React, { Fragment } from 'react'
import dayjs from 'dayjs'
import clsx from 'clsx'
import styles from './styles.module.scss'
import { getLatestPosts } from '@/utils/post'
import type { PostListProps } from '@/components/PostList'
import PostList from '@/components/PostList'

function formatPosts(posts: PostListProps['posts']) {
  const m = new Map<number, PostListProps['posts']>()
  for (const post of posts) {
    const year = dayjs(post.frontmatter.date).year()
    if (!m.has(year))
      m.set(year, [])
    m.get(year)!.push(post)
  }
  return Array.from(m)
}

export default async function Posts() {
  const posts = await getLatestPosts()
  const formattedPosts = formatPosts(posts)

  return (
    <>
      <div className={clsx(styles.blog, 'prose-container')}>
        <h2
          className={clsx(
            styles.title,
            'relative font-bold text-5xl my-10 sm:my-10 italic',
          )}
        >
          Blog
        </h2>
        {formattedPosts.map(([year, postsByYear], idx) => (
          <Fragment key={idx}>
            <h2
              className="font-medium text-2xl
                before:content-['#_'] before:text-primary"
            >
              {year}
            </h2>
            <PostList posts={postsByYear} />
          </Fragment>
        ))}
      </div>
    </>
  )
}
