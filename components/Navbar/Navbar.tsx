import React, {useState} from 'react'
import style from './Navbar.module.scss'
import {ShoppingCartOutlined} from '@ant-design/icons'
import {useAppContext} from 'reducerContext/provider'
import {Drawer, Button, Space, List, Skeleton, Avatar} from 'antd'
import {deleteProduct} from '../../reducerContext/actions'
import {calcTotalAmount} from 'helpers/handleProducts'
import ActiveLink from '@components/ActiveLink/ActiveLink'
import Image from 'next/image'

const Navbar = () => {
  const [state, dispatchContext] = useAppContext()
  const [visible, setVisible] = useState(false)

  const handleShowDrawer = () => {
    setVisible(!visible)
  }

  const handleDeleteProduct = id => {
    deleteProduct(dispatchContext, id)
  }

  const totalAmount = calcTotalAmount(state.cart)

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.navbar__topbar}>
          <div className={style.navbar__topbar__logo}>
            <Image
              src="/eaten-apple-logo-vector_f.png"
              width="800"
              height="275"
            />
          </div>
          <div
            className={style.navbar__topbar__shoppingCart}
            onClick={handleShowDrawer}
          >
            <ShoppingCartOutlined />
            <span> Shopping Cart ({state.cart.length})</span>
          </div>
        </div>
        <ul className={style.navbar__list}>
          <ActiveLink href="/" prefetch>
            <li className={style.navbar__item}>Home</li>
          </ActiveLink>
          <ActiveLink href="/yesorno" prefetch>
            <li className={style.navbar__item}>Yes or No</li>
          </ActiveLink>
          <ActiveLink href="/about" prefetch>
            <li className={style.navbar__item}>About</li>
          </ActiveLink>
        </ul>
      </nav>
      <Drawer
        title="Shopping Cart"
        className={style.Drawer_custom}
        placement="right"
        size="large"
        onClose={handleShowDrawer}
        visible={visible}
        footer={
          <Space>
            <Button type="primary" onClick={handleShowDrawer}>
              Total ({totalAmount} $) Procced to CheckOut
            </Button>
          </Space>
        }
      >
        <List
          className="demo-loadmore-list"
          // loading={initLoading}
          itemLayout="horizontal"
          // loadMore={loadMore}
          dataSource={state.cart}
          renderItem={(item: ProductType) => (
            <List.Item
              actions={[
                <a
                  key="list-loadmore-edit"
                  onClick={() => handleDeleteProduct(item.uniqueIdProduct)}
                >
                  delete
                </a>,
                // <a key="list-loadmore-more">more</a>,
              ]}
            >
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.product_image} />}
                  title={<a href="https://ant.design">{item.product}</a>}
                  // description={item.description}
                />
                <div>{item.price} $</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </Drawer>
    </>
  )
}

export default Navbar
