import {AllSwiper} from '@components/AllSwiper/AllSwiper'
import {useInstagram} from 'hooks/instagram'
import {useQuery} from 'react-query'

export const InstagramFeed = ({data}) => {
  return (
    <>
      <AllSwiper feeds={data} />
    </>
  )
}
