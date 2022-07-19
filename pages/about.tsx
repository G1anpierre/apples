import React from 'react'
import {InstagramFeed} from '@components/InstagramFeed/InstagramFeed'
import {dehydrate, QueryClient, useQuery} from 'react-query'
import {GetStaticProps} from 'next'
import {getInstagramPosts} from 'helpers/helperFetch'

const About = () => {
  const {isSuccess, data, isLoading, isError} = useQuery('instagram', () =>
    getInstagramPosts(),
  )

  if (isLoading) {
    return <div>...loading</div>
  }

  if (isSuccess) {
    return (
      <div>
        <h3>Gianpierre W. Fernandez</h3>
        <InstagramFeed data={data} />
      </div>
    )
  }
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
