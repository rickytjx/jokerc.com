import React from 'react'
import { FiCopy } from 'react-icons/fi'

export interface AuthorProps {
  title: string
  slug: string
  isShare: boolean
  shareUrl?: string
}

const Author: React.FC<AuthorProps> = props => {
  const { title, slug, isShare, shareUrl } = props

  const url = isShare ? shareUrl : `https://jokerc.com/posts/${slug}`;

  return (
    <div className="text-[#4a4a4a] bg-[#f5f5f5] py-4 px-5 mt-5 sm:-mx-3 rounded author">
      <div className='text-[15px]'>{ isShare ? '本文分享自作者个人站点/博客' : title }</div>
      <div className="text-[#7a7a7a] mb-3 flex">
        { isShare ? (
          <a href={ url } className="text-[13px] hover:!border-zinc-400 align-middle" target="_blank" rel="nofollow noopener noreferrer">{ url }</a>
        ) : (
          <a href={ url } className="text-[13px] hover:!border-zinc-400 align-middle">{ url }</a>
        )}
        <button className="hidden sm:block ml-2 align-middle transition-opacity opacity-60 hover:opacity-100 cursor-pointer" title="复制" onClick={() => navigator.clipboard.writeText(url as string)}>
          <FiCopy className="text-sm" aria-hidden />
        </button>
      </div>
      <div className="text-[15px]">{ isShare ? '如有侵权，请联系 m@jokerc.com 删除。' : '转载或引用本文时请遵守许可协议，注明出处、不得用于商业用途！'}</div>
    </div>
  )
}

export default Author
