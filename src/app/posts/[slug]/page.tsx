import path from 'node:path'
import { bundleMDX } from 'mdx-bundler'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkDirective from 'remark-directive'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkReadingTime from 'remark-reading-time'
import remarkReadingMdxTime from 'remark-reading-time/mdx'
import type { Metadata } from 'next'
import config from 'config'
import PostPage from './PostPage'
import AutoRefresh from './AutoRefresh'
import remarkMdxCodeProps from '@/lib/unified/remark-mdx-code-props'
import remarkLinkCard from '@/lib/unified/remark-link-card'
import remarkImageInfo from '@/lib/unified/remark-image-info'
import { getAdjacentPosts, getAllPosts, getPostFrontmatter, getPostSlug } from '@/utils/post'
import { getImageInfo } from '@/utils/image'
import remarkAdmonitions from '@/lib/unified/remark-admonitions'

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return Array.from(posts).map(post => ({
    slug: getPostSlug(post),
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug)
  const frontmatter = await getPostFrontmatter(slug)

  return {
    title: frontmatter.title,
    description: config.description,
    openGraph: {
      title: frontmatter.title,
      description: config.description,
      images: '/api/og',
    },
  } satisfies Metadata
}

export default async function Post({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug)
  const { code, frontmatter } = await bundleMDX<PostFrontmatter>({
    // eslint-disable-next-line node/prefer-global/process
    file: path.join(process.cwd(), `./posts/${slug}.mdx`),
    // eslint-disable-next-line node/prefer-global/process
    cwd: path.join(process.cwd(), './posts'),
    mdxOptions(options, _frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm,
        remarkUnwrapImages,
        remarkDirective,
        remarkAdmonitions,
        remarkMath,
        remarkReadingTime,
        remarkReadingMdxTime,
        remarkMdxCodeProps,
        remarkLinkCard,
        remarkImageInfo,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { class: 'anchor' } }],
        rehypeKatex,
      ]

      return options
    },
    esbuildOptions(options, _frontmatter) {
      options.target = ['es2015']

      return options
    },
  })

  const { prev, next } = await getAdjacentPosts(slug)
  const heroImageInfo = frontmatter.heroImage
    ? await getImageInfo(frontmatter.heroImage)
    : undefined

  return (
    <>
      <PostPage
        slug={slug}
        code={code}
        frontmatter={frontmatter}
        heroImageInfo={heroImageInfo}
        prevPost={prev ? { link: `/posts/${prev.slug}`, title: prev.frontmatter.title } : undefined}
        nextPost={next ? { link: `/posts/${next.slug}`, title: next.frontmatter.title } : undefined}
      />
      <AutoRefresh />
    </>
  )
}
