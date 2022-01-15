import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.scss'
import {ShoppingCartOutlined} from '@ant-design/icons'
import {useAppContext} from 'reducerContext/provider'

const Navbar = () => {
  const [state] = useAppContext()

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.navbar__topbar}>
          <div className={style.navbar__topbar__logo}>Logo</div>
          <div className={style.navbar__topbar__shoppingCart}>
            <ShoppingCartOutlined />
            <span> Shopping Cart ({state.cart.length})</span>
          </div>
        </div>
        <ul className={style.navbar__list}>
          <Link href="/">
            <a>
              <li className={style.navbar__item}>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li className={style.navbar__item}>About</li>
            </a>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
