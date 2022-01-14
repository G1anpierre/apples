// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {products} from '../../../database/data'

export default function handler(req, res) {
  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify(products))
}
