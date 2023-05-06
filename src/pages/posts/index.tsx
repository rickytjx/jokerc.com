import React from 'react'
import classNames from 'classnames'
import type { GetStaticProps } from 'next'
import styles from './styles.module.scss'
import { getLatestPosts } from '@/utils/post'
import generateRssFeed from '@/utils/rss'
import type { PostListProps } from '@/components/PostList'
import PostList from '@/components/PostList'

export interface BlogProps {
  posts: PostListProps['posts']
}

const Index: React.FC<BlogProps> = (props) => {
  const { posts } = props

  return (
    <>
      <div className="prose-container">
        <h2
          className={classNames(
            styles.title,
            'relative font-medium font-serif text-5xl my-10 sm:my-10',
          )}
        >
          Blog
        </h2>
        <PostList posts={posts} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({ locale }) => {
  await generateRssFeed()
  const posts = await getLatestPosts()

  return {
    props: {
      posts,
    },
  }
}

export default Index
