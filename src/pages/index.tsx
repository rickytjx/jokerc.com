import type { GetStaticProps } from 'next'
import MeLayout from '../layouts/Me'

export default MeLayout

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
