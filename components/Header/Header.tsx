import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from './Header.module.scss'

const Header = () => {
  return (
    <>
      <header className={style.header_container}>
        <h1 className="header_container__title">Apples Shop</h1>
      </header>
    </>
  )
}

export default Header
