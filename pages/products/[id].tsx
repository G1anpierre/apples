import React from 'react'
import {useRouter} from 'next/router'
import {Row, Col, Spin, Space, InputNumber, Button} from 'antd'
import {useAppContext} from '../../reducerContext/provider'

import Image from 'next/image'
import style from '../../styles/ProoductDetail.module.scss'
import {useQuery} from 'react-query'

const fetchDetailProduct = async id => {
  const response = await fetch(`http://localhost:3000/api/products/${id}`)
  const data = await response.json()
  return data
}

const ProductDetail = () => {
  const [, dispatchContext] = useAppContext()
  const [value, setValue] = React.useState(1)
  const router = useRouter()
  const {id} = router.query

  const detailProduct = useQuery(['detailProduct', id], () =>
    fetchDetailProduct(id),
  )

  const {isLoading, isSuccess, isError, data} = detailProduct

  const handleNumberOfProducts = (data, value) => {
    const totalAdded = []
    for (let i = 0; i < value; i++) {
      totalAdded.push(data)
    }
    return totalAdded
  }

  const handleAddProduct = (data, value) => {
    const total = handleNumberOfProducts(data, value)
    console.log(total)

    dispatchContext({type: 'updateCart', payload: total})
  }

  const onChange = value => {
    setValue(value)
  }

  if (isLoading) {
    return (
      <div className={style.spinner_container}>
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    )
  }

  if (isError) {
    return <div>There was an error while loading</div>
  }

  if (isSuccess) {
    return (
      <div className={style.detail}>
        <Row justify="center" gutter={[48, 16]}>
          <Col xs={{span: 20}} md={{span: 10}}>
            <div className={style.detail__image_container}>
              <Image
                src={data.product_image}
                alt={data.product}
                layout="fill"
              />
            </div>
          </Col>
          <Col xs={{span: 20}} md={{span: 10}}>
            <div className={style.detail__description}>
              <Row gutter={[16, 16]}>
                <Col span={12}>Product Name:</Col>
                <Col span={12}>{data?.product}</Col>
                <Col span={12}>Product Description:</Col>
                <Col span={12}>{data?.description}</Col>
                <Col span={12}>Price:</Col>
                <Col span={12}>{data?.price} $</Col>
              </Row>
            </div>
            <div className={style.detail__add_product}>
              <InputNumber
                min={1}
                max={100}
                value={value}
                onChange={onChange}
              />
              <Button
                type="primary"
                onClick={() => handleAddProduct(data, value)}
              >
                Add Product to Cart
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ProductDetail
