type ProductType = {
  id: number
  sku: string
  uniqueIdProduct: string
  product: string
  description: string
  price: string
  image: {
    url: string
  }
  sys: {
    id: string
  }
}

type InitialStateType = {
  cart: ProductType[]
}
