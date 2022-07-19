export const fetchProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL}/api/products`)
  const data = await response.json()
  return data
}

export const fetchDetailProduct = async id => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL}/api/products/${id}`,
  )
  const data = await response.json()
  return data
}

export const getInstagramPosts = async () => {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`,
  )
  const data = await response.json()
  return data.data
}
