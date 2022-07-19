import {useEffect, useState} from 'react'

export const useInstagram = () => {
  const [feeds, setFeed] = useState([])

  useEffect(() => {
    const getFeeds = async () => {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`,
      )
      const data = await response.json()
      setFeed(data.data)
    }

    getFeeds()
  }, [])

  return {feeds}
}
