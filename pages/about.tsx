import React from 'react'
import {InstagramFeed} from '@components/InstagramFeed/InstagramFeed'
import {dehydrate, QueryClient} from 'react-query'
import {GetStaticProps} from 'next'
import {getInstagramPosts} from 'helpers/helperFetch'

const About = () => {
  return (
    <div>
      <h3>Gianpierre W. Fernandez</h3>
      <InstagramFeed />
    </div>
  )
}

export default About

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('instagram', () => getInstagramPosts())

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  }
}
