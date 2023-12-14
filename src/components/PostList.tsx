import React from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import DesktopOnly from './DesktopOnly'
import MobileOnly from './MobileOnly'
import useTranslation from '@/hooks/useTranslation'

export interface PostListProps {
  posts: {
    slug: string
    frontmatter: PostFrontmatter
  }[]
  dateFormat?: string
}

const PostList: React.FC<PostListProps> = (props) => {
  const { posts = [], dateFormat = 'MMMM D' } = props
  const { t } = useTranslation()

  return (
    <>
      {posts.map(({ frontmatter, slug }, idx) => (
        <article key={idx} className="my-8">
          <h3 className="text-lg font-medium">
            <Link
              className="hover:text-primary transition-colors"
              href={`/posts/${slug}`}
              prefetch={false}
            >
              {frontmatter.isShare && (
                <DesktopOnly>
                  <span className="align-middle text-xs mr-2 -ml-[2.625rem] bg-zinc-800 text-zinc-300 rounded px-1 py-1">{ t('share') }</span>
                </DesktopOnly>
              )}
              <span className="align-middle">{frontmatter.title}</span>
            </Link>
          </h3>
          <span className="font-medium inline-block text-sm mt-2 text-zinc-400 dark:text-zinc-500">
            {dayjs(frontmatter.date).format(dateFormat)}
          </span>
          {frontmatter.isShare && (
            <MobileOnly>
              <span className="align-middle text-xs ml-2 bg-zinc-800 text-zinc-300 rounded px-1 py-1">{ t('share') }</span>
            </MobileOnly>
          )}
        </article>
      ))}
    </>
  )
}

export default PostList
