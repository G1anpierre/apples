import React, {useState, useEffect} from 'react'
import ProductList from '@components/ProductList/ProductList'
import CardProduct from '@components/CardProduct/CardProduct'

import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Header from '@components/Header/Header'

export default function Home() {
  const [state, setState] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('http://localhost:3000/api/products')
      const data = await response.json()
      setState(data)
    }

    getProducts()
  }, [])

  return (
    <div className="">
      <Header />

      <ProductList>
        {state.map(product => (
          <CardProduct {...product} />
        ))}
      </ProductList>
    </div>
  )
}
