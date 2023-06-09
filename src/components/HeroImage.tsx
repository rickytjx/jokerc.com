import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import useImage from '@/hooks/useImage'
import type { NativeProps } from '@/utils/native-props'
import { withNativeProps } from '@/utils/native-props'

export interface HeroImageProps extends NativeProps {
  src: string
  aspectRatio?: string // 长 / 宽
}

const HeroImage: React.FC<HeroImageProps> = (props) => {
  const { src, aspectRatio = '16 / 9' } = props
  const { dataUrl, status } = useImage(src)

  const loading = (
    <div className="flex h-full items-center justify-center bg-slate-200/70 dark:bg-zinc-600/20 text-slate-500/50">
      <AiOutlineLoading className="text-4xl animate-spin" />
    </div>
  )

  const failed = (
    <div className="flex h-full items-center justify-center bg-slate-200/70 dark:bg-zinc-600/20">
      <img
        className="opacity-10 dark:invert"
        src="/public/broken-image.png"
        alt="image broken"
        width={60}
      />
    </div>
  )

  return withNativeProps(
    props,
    <div className="w-full rounded-lg overflow-hidden isolate" style={{ aspectRatio }}>
      {status === 'loading' && loading}
      {status === 'loaded' && (
        <img
          className="w-full h-full object-cover"
          src={dataUrl}
          alt="hero image"
        />
      )}
      {status === 'failed' && failed}
    </div>,
  )
}

export default HeroImage
