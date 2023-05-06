import path from 'node:path'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { bundleMDX } from 'mdx-bundler'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkReadingTime from 'remark-reading-time'
import remarkReadingMdxTime from 'remark-reading-time/mdx'
import PostLayout from '../../layouts/Post'
import remarkAdmonitions from '@/lib/remark-admonitions.js'
import remarkMdxMetaToProps from '@/lib/remark-mdx-meta-to-props.js'
import { getAdjacentPosts, getAllPostPaths, getSlugByPostPath } from '@/utils/post'

export default PostLayout

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = await getAllPostPaths()

  return {
    paths: paths.map(p => ({
      params: { slug: getSlugByPostPath(p) },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({ params }) => {
  const { slug } = params!
  const { code, frontmatter } = await bundleMDX({
    file: path.resolve(process.cwd(), `./posts/${slug}.mdx`),
    cwd: path.resolve(process.cwd(), './posts'),
    mdxOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm,
        remarkMdxMetaToProps,
        remarkDirective,
        remarkAdmonitions,
        remarkReadingTime,
        remarkReadingMdxTime,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { class: 'anchor' } }],
      ]

      return options
    },
    esbuildOptions(options, frontmatter) {
      options.target = ['es2015']

      return options
    },
  })

  const { prev, next } = await getAdjacentPosts(slug)

  return {
    props: {
      slug,
      code,
      frontmatter,
      prevPost: prev ? { link: `/posts/${prev.slug}`, title: prev.frontmatter.title } : null,
      nextPost: next ? { link: `/posts/${next.slug}`, title: next.frontmatter.title } : null,
    },
  }
}
