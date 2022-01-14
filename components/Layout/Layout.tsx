import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import Footer from '../Footer/Footer'
import Navbar from '@components/Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Navbar />
            {children}
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Layout
