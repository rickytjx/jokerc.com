import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { getLatestPosts } from '@/utils/post'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PostList, { PostListProps } from '@/components/PostList'

export interface BlogProps {
  posts: PostListProps['posts']
}

const Index: React.FC<BlogProps> = (props) => {
  const { posts } = props

  return (
    <>
      <div className="container min-h-screen">
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
  const posts = await getLatestPosts();

  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  }
}

export default Index
