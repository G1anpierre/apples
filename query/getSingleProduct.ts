import {gql} from 'graphql-request'
import graphQLClient from './index'

const getSingleApple = async ({queryKey}) => {
  const query = gql`
    {
      query getApples($id: id) {
        apples(id: $id) {
          product
          description
          price
          sku
          image {
            url
          }
        }
      }
    }
  `
  const [, id] = queryKey
  const variables = {
    id: id,
  }
  console.log('id passed: ', queryKey)
  const response = await graphQLClient.request(query, variables)
  const data = JSON.parse(JSON.stringify(response))
  console.log('data form getProduct :', data.apples)
  return data.apples
}

export default getSingleApple
