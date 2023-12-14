import React from 'react'
import { getLatestPosts } from '@/utils/post'
import Splash from '@/components/Splash'
import PostList from '@/components/PostList'

export async function generateStaticParams() {
  const posts = await getLatestPosts()
  const tags = new Set<string>()

  for (const post of posts) {
    for (const tag of post.frontmatter.tags || [])
      tags.add(tag)
  }

  return Array.from(tags).map(tag => ({
    slug: tag,
  }))
}

export default async function PostsByTag({ params }: { params: { slug: string } }) {
  const { slug } = params
  const tag = decodeURIComponent(slug)
  const posts = await getLatestPosts()

  return (
    <div className="prose-container">
      <Splash />
      <h2 className="font-medium text-2xl before:content-['#_'] before:text-primary">{tag}</h2>
      <PostList
        posts={posts.filter(post => post.frontmatter.tags?.includes(tag))}
        dateFormat="MMMM D, YYYY"
      />
    </div>
  )
}
