import {products} from '../../../database/data'

export default function handler(req, res) {
  console.log(req.query)
  const {id} = req.query

  const foundProduct = products.find(product => {
    return product.id === Number(id)
  })
  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify(foundProduct))
}
