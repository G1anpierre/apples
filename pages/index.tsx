import React from 'react'
import ProductList from '@components/ProductList/ProductList'
import CardProduct from '@components/CardProduct/CardProduct'
import {useQuery} from 'react-query'
import {fetchProducts} from 'helpers/helperFetch'

import Header from '@components/Header/Header'

export async function getStaticProps() {
  const products = await fetchProducts()
  console.debug({products})
  return {
    props: {
      products,
    },
  }
}

export default function Home(props) {
  const {data} = useQuery('products', fetchProducts, {
    initialData: props.products,
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
