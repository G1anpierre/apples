import {gql} from 'graphql-request'
import graphQLClient from './index'

const getSingleApple = async ({queryKey}) => {
  const query = gql`
    {
      apples(id: id) {
        product
        description
        price
        sku
        image {
          url
        }
      }
    }
  `
  const [, id] = queryKey
  console.log('id Query key', id)
  const variables = {
    id,
  }
  console.log('id passed: ', queryKey)
  const response = await graphQLClient.request(query, variables)
  const data = JSON.parse(JSON.stringify(response))
  console.log('data form getProduct :', data.apples)
  return data.apples
}

export default getSingleApple
