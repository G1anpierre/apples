import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import style from '../../styles/ProoductDetail.module.scss'
import {useQuery} from 'react-query'

const fetchDetailProduct = async id => {
  const response = await fetch(`http://localhost:3000/api/products/${id}`)
  const data = await response.json()
  return data
}

const ProductDetail = () => {
  const router = useRouter()
  const {id} = router.query

  const detailProduct = useQuery(['detailProduct', id], () =>
    fetchDetailProduct(id),
  )

  const {isLoading, isSuccess, isError, data} = detailProduct

  if (isLoading) {
    return <div>...loading</div>
  }

  if (isError) {
    return <div>There was an error while loading</div>
  }

  if (isSuccess) {
    return (
      <div className={style.detail}>
        <Row className="gx-5">
          <Col xs={12} md={6}>
            <div className={style.detail__image_container}>
              <Image
                src={data.product_image}
                alt={data.product}
                layout="fill"
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={style.detail__description}>
              <Row>
                <Col className={style.detail__description__center}>
                  <div>product Name: </div>
                </Col>
                <Col className={style.detail__description__center}>
                  <div>{data?.product}</div>
                </Col>
              </Row>
              <Row>
                <Col className={style.detail__description__center}>
                  <div>product Description: </div>
                </Col>
                <Col className={style.detail__description__center}>
                  <div>{data?.description}</div>
                </Col>
              </Row>
              <Row>
                <Col className={style.detail__description__center}>
                  <div>price: </div>
                </Col>
                <Col className={style.detail__description__center}>
                  <div>{data?.price} $</div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ProductDetail
