import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from './CardProduct.module.scss'

const CardProduct = ({
  product,
  price,
  description,
  image,
  sys,
}: ProductType) => {
  return (
    <Link href={`/products/${sys.id}`}>
      <a className={style.card_link}>
        <div className={style.card}>
          <div className={style.card__image_container}>
            <Image src={image.url} alt={product} layout="fill" />
          </div>
          <div className="card-body">
            <h3 className="card-body__title">{product}</h3>
            <h6 className="card-body__price">{price} $</h6>
            <p className="card-body__description">{description}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CardProduct
