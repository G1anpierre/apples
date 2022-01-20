import React from 'react'
import {Row, Col, Spin, Space, InputNumber, Button} from 'antd'
import {useAppContext} from '../../reducerContext/provider'
import {handleNumberOfProducts} from 'helpers/handleProducts'
import {updateCart} from '../../reducerContext/actions'
import {fetchProducts, fetchDetailProduct} from 'helpers/helperFetch'
import {GetStaticProps, InferGetStaticPropsType} from 'next'

import Image from 'next/image'
import style from '../../styles/ProoductDetail.module.scss'

type DetailDataProps = {
  detailData: ProductType
}

export const getStaticProps: GetStaticProps<DetailDataProps> = async ({
  params,
}) => {
  const {id} = params
  const detailData = await fetchDetailProduct(id)

  return {
    props: {
      detailData,
    },
  }
}

export const getStaticPaths = async () => {
  const products = await fetchProducts()
  const paths = products.map(product => ({
    params: {
      id: product.id.toString(),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

const ProductDetail = ({
  detailData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [, dispatchContext] = useAppContext()
  const [value, setValue] = React.useState(1)

  const handleAddProduct = (data, value) => {
    const totalProductsToAdd = handleNumberOfProducts(data, value)

    updateCart(dispatchContext, totalProductsToAdd)
  }

  const onChange = value => {
    setValue(value)
  }

  return (
    <div className={style.detail}>
      <Row justify="center" gutter={[48, 16]}>
        <Col xs={{span: 20}} md={{span: 10}}>
          <div className={style.detail__image_container}>
            <Image
              src={detailData.product_image}
              alt={detailData.product}
              layout="fill"
            />
          </div>
        </Col>
        <Col xs={{span: 20}} md={{span: 10}}>
          <div className={style.detail__description}>
            <Row gutter={[16, 16]}>
              <Col span={12}>Product Name:</Col>
              <Col span={12}>{detailData?.product}</Col>
              <Col span={12}>Product Description:</Col>
              <Col span={12}>{detailData?.description}</Col>
              <Col span={12}>Price:</Col>
              <Col span={12}>{detailData?.price} $</Col>
            </Row>
          </div>
          <div className={style.detail__add_product}>
            <InputNumber min={1} max={100} value={value} onChange={onChange} />
            <Button
              type="primary"
              onClick={() => handleAddProduct(detailData, value)}
            >
              Add Product to Cart
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductDetail
