import React, {useState, useEffect} from 'react'
import {YesOrNoCalulation} from 'helpers/calcYesOrNo'
import style from '../styles/YesOrNo.module.scss'
import Image from 'next/image'
import {Button, Space} from 'antd'
import {useRouter} from 'next/router'

const YesOrNo = () => {
  const router = useRouter()
  const [state, setState] = useState({
    status: 'iddle',
    result: null,
  })

  const getCalculation = () => {
    setState({
      status: 'iddle',
      result: null,
    })
    YesOrNoCalulation()
      .then((result: boolean) => {
        setState({...state, status: 'yes', result})
      })
      .catch(error => {
        setState({
          status: 'no',
          result: error,
        })
      })
  }

  useEffect(() => {
    getCalculation()
  }, [])

  const handleTryAgain = () => {
    getCalculation()
  }

  console.log('state :', state)

  return (
    <div className={style.container}>
      <h1>Should I Eat an Apple today ? Yes or No</h1>
      <div className={style.container__response}>
        {state.status === 'iddle' ? (
          <div>....Thinking About it</div>
        ) : state.status === 'yes' ? (
          <div>
            <Image src="/yes-image.png" width={300} height={300} />
          </div>
        ) : (
          <div>
            <Image src="/No-image.png" width={300} height={300} />
          </div>
        )}
      </div>
      <Space>
        <Button type="primary" ghost onClick={handleTryAgain}>
          Try Again
        </Button>
        <Button type="dashed" onClick={() => router.push('/')}>
          Go back to Home
        </Button>
      </Space>
    </div>
  )
}

export default YesOrNo
