type ProductType = {
  id: number
  sku: string
  uniqueIdProduct: string
  product: string
  description: string
  price: string
  product_image: string
}

type InitialStateType = {
  cart: ProductType[]
}
