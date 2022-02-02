import React from 'react'
import ProductList from '@components/ProductList/ProductList'
import CardProduct from '@components/CardProduct/CardProduct'
import {useQuery} from 'react-query'
// import {fetchProducts} from 'helpers/helperFetch'
import {getAllPosts} from '../utils/contentful'
import {GetStaticProps, InferGetStaticPropsType} from 'next'

import Header from '@components/Header/Header'

type HomeProductsType = {
  products: ProductType[]
}

export const getStaticProps: GetStaticProps<HomeProductsType> = async () => {
  const products = await getAllPosts()
  return {
    props: {
      products,
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {data} = useQuery('products', getAllPosts, {
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
