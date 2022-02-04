import React from 'react'
import ProductList from '@components/ProductList/ProductList'
import CardProduct from '@components/CardProduct/CardProduct'
import {dehydrate, QueryClient, useQuery} from 'react-query'
// import {fetchProducts} from 'helpers/helperFetch'
import getAllApples from '../query/getAllProducts'
import {GetStaticProps, InferGetStaticPropsType} from 'next'

import Header from '@components/Header/Header'

type HomeProductsType = {
  queryClient: ProductType[]
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('products', getAllApples)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Home() {
  const {data} = useQuery('products', getAllApples)

  return (
    <div>
      <Header />
      <ProductList>
        {data?.map(product => (
          <CardProduct {...product} key={product.sys.id} />
        ))}
      </ProductList>
    </div>
  )
}
