import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.scss'

const Navbar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <ul className={style.navbar_list}>
          <Link href="/">
            <a>
              <li className={style.navbar_item}>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li className={style.navbar_item}>About</li>
            </a>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
