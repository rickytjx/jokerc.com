import React from 'react'
import config from 'config'
// import Script from 'next/script'
// import { HiEye, HiUserGroup } from 'react-icons/hi'

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-16 mb-6 text-sm">
      <span className="font-medium">
        Powered By <a href="https://nextjs.org" className="text-primary no-underline">Next.js</a> • Deployed on <a href="https://cloud.tencent.com" className="text-primary">Tencent Cloud</a>
      </span>
      <div className="mt-2 opacity-50">
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank" rel="nofollow noopener noreferrer">CC BY-NC-SA 4.0</a> &copy; {new Date().getFullYear()}&nbsp;{config.name}
      </div>
      {/*{config.busuanzi && (*/}
      {/*  <>*/}
      {/*    <Script src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js" />*/}
      {/*    <div className="flex items-center text-sm">*/}
      {/*      <HiEye />*/}
      {/*      &nbsp;*/}
      {/*      <span id="busuanzi_value_site_pv">0</span>&nbsp;&nbsp;*/}
      {/*      <HiUserGroup />*/}
      {/*      &nbsp;*/}
      {/*      <span id="busuanzi_value_site_uv">0</span>*/}
      {/*    </div>*/}
      {/*  </>*/}
      {/*)}*/}
    </div>
  )
}

export default Footer
