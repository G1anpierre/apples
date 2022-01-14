import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

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

  return <div>Hello Detail {detail?.product}</div>
}

export default ProductDetail
