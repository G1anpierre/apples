import React from 'react'
// import {Container, Row, Col} from 'react-bootstrap'

import {Layout, Row, Col} from 'antd'
import Footer from '../Footer/Footer'
import Navbar from '@components/Navbar/Navbar'

const LayoutComponent = ({children}) => {
  return (
    <>
      <Layout>
        <Row justify="center">
          <Col span={20}>
            <Navbar />
            {children}
            <Footer />
          </Col>
        </Row>
      </Layout>
    </>
  )
}

export default LayoutComponent
