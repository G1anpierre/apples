import React from 'react'
import ProductList from '@components/ProductList/ProductList'
import CardProduct from '@components/CardProduct/CardProduct'
import {dehydrate, QueryClient} from 'react-query'
import {useGetAllProductsQuery} from 'pages/api/generated/graphql'
import getAllApples from '../query/getAllProducts'
import {GetStaticProps} from 'next'

import Header from '@components/Header/Header'
import {GraphQLResponse} from 'graphql-request/dist/types'
import graphQLClient from 'query'

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
  // const {data} = useQuery<GraphQLResponse, Error>('products', getAllApples)
  const {data} = useGetAllProductsQuery<GraphQLResponse>(graphQLClient)

  console.log('data :', data)

  return (
    <div>
      <Header />
      <ProductList>
        {data?.applesCollection?.items?.map(product => (
          <CardProduct {...product} key={product.sys.id} />
        ))}
      </ProductList>
    </div>
  )
}
