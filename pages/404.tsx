import React from 'react'
import style from '../styles/ErrorPage.module.scss'
import Image from 'next/image'

const ErrorPage404 = () => {
  return (
    <div className={style.container}>
      <Image src="/errorImage.jpg" width={500} height={500} />
    </div>
  )
}

export default ErrorPage404
