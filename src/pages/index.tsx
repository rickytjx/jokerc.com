import React from 'react'
import { GetStaticProps } from 'next'
import { getLatestPosts } from '@/utils/post'
import MeLayout from '../layouts/Me'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default MeLayout

export const getStaticProps: GetStaticProps = async ({ locale }) => {

  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  }
}
