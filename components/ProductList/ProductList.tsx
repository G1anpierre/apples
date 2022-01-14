import React from 'react'
import style from './ProductList.module.scss'

const ProductList = ({children}) => {
  return (
    <>
      <ul className={style.cards}>
        <>{children}</>
      </ul>
    </>
  )
}

export default ProductList
