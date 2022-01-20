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
