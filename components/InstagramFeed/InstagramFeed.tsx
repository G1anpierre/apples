import {AllSwiper} from '@components/AllSwiper/AllSwiper'
import {getInstagramPosts} from 'helpers/helperFetch'
import {useQuery} from 'react-query'

export const InstagramFeed = () => {
  const {isSuccess, data, isLoading, isError} = useQuery('instagram', () =>
    getInstagramPosts(),
  )

  if (isLoading) {
    return <div>...loading</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  if (isSuccess) {
    return (
      <>
        <AllSwiper feeds={data} />
      </>
    )
  }
}
