import React, {useState, useEffect} from 'react'
import ProductList from '@components/ProductList/ProductList'
import CardProduct from '@components/CardProduct/CardProduct'
import {useQuery} from 'react-query'

import Header from '@components/Header/Header'

const fetchProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL}/api/products`)
  const data = await response.json()
  return data
}

export async function getStaticProps() {
  const products = await fetchProducts()

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
