import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import style from '../../styles/ProoductDetail.module.scss'

const ProductDetail = () => {
  const [detail, setDetail] = useState<ProductType>()

  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
    const getDetail = async () => {
      const response = await fetch(`http://localhost:3000/api/products/${id}`)
      const data = await response.json()
      setDetail(data)
    }
    getDetail()
  }, [])

  console.log('detail :', detail)
  if (!detail) {
    return <div>...loading</div>
  }

  return (
    <div className={style.detail}>
      <Row className="gx-5">
        <Col xs={12} md={6}>
          <div className={style.detail__image_container}>
            <Image
              src={detail?.product_image}
              alt={detail?.product}
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
                <div>{detail.product}</div>
              </Col>
            </Row>
            <Row>
              <Col className={style.detail__description__center}>
                <div>product Description: </div>
              </Col>
              <Col className={style.detail__description__center}>
                <div>{detail.description}</div>
              </Col>
            </Row>
            <Row>
              <Col className={style.detail__description__center}>
                <div>price: </div>
              </Col>
              <Col className={style.detail__description__center}>
                <div>{detail.price} $</div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductDetail
