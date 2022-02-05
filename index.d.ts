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

type ListItem = ProductType & {uniqueIdProduct: string}

type InitialStateType = {
  cart: ListItem[]
}
