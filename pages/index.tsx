import React from 'react'
import ProductList from '@components/ProductList/ProductList'
import CardProduct from '@components/CardProduct/CardProduct'
import {useQuery} from 'react-query'
import {fetchProducts} from 'helpers/helperFetch'
import {GetStaticProps, InferGetStaticPropsType} from 'next'

import Header from '@components/Header/Header'

type HomeProductsType = {
  products: ProductType[]
}

export const getStaticProps: GetStaticProps<HomeProductsType> = async () => {
  const products = await fetchProducts()
  return {
    props: {
      products,
    },
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {data} = useQuery('products', fetchProducts, {
    initialData: products,
  })

  return (
    <div>
      <Header />
      <ProductList>
        {data?.map(product => (
          <CardProduct {...product} key={product.id} />
        ))}
      </ProductList>
    </div>
  )
}
