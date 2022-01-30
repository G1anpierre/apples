import React from 'react'
import {Row, Col, Spin, Space, InputNumber, Button} from 'antd'
import {useAppContext} from '../../reducerContext/provider'
import {handleNumberOfProducts} from 'helpers/handleProducts'
import {updateCart} from '../../reducerContext/actions'
// import {fetchProducts, fetchDetailProduct} from 'helpers/helperFetch'
// import {GetStaticProps, InferGetStaticPropsType} from 'next'
import {useRouter} from 'next/router'
import {dehydrate, QueryClient, useQuery} from 'react-query'
import getAllApples from '../../query/getAllProducts'
import getSingleApple from '../../query/getSingleProduct'

import Image from 'next/image'
import style from '../../styles/ProoductDetail.module.scss'

type DetailDataProps = {
  detailData: ProductType
}

export const getStaticProps = async context => {
  const id = context.params.id
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['product', id], getSingleApple)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export const getStaticPaths = async () => {
  const data = await getAllApples()
  const paths = data.map(product => ({
    params: {
      id: product.sys.id,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

const ProductDetail = () => {
  const router = useRouter()
  const {id} = router.query
  console.log('id :', id)
  const {
    data: detailData,
    isLoading,
    isError,
  } = useQuery(['product', id], getSingleApple)
  const [, dispatchContext] = useAppContext()
  const [value, setValue] = React.useState(1)

  const handleAddProduct = (data, value) => {
    const totalProductsToAdd = handleNumberOfProducts(data, value)

    updateCart(dispatchContext, totalProductsToAdd)
  }

  const onChange = value => {
    setValue(value)
  }

  if (isError) {
    return <div>Error</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log('detailData :', detailData)

  return (
    <div className={style.detail}>
      <Row justify="center" gutter={[48, 16]}>
        <Col xs={{span: 20}} md={{span: 10}}>
          <div className={style.detail__image_container}>
            <Image
              src={detailData.image.url}
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
