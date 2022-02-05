type ProductType = {
  sku?: string
  product?: string
  description?: string
  price?: number
  image?: {
    url?: string
  }
  sys: {
    id: string
  }
}

type InitialStateType = {
  cart: ProductType[]
}
