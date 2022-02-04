import {gql} from 'graphql-request'
import graphQLClient from './index'

const getSingleApple = async queryKey => {
  const query = gql`
    query getSingleProduct($id: String!) {
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
  `
  const variables = {
    id: queryKey,
  }
  const response = await graphQLClient.request(query, variables)
  const data = JSON.parse(JSON.stringify(response))
  return data.apples
}

export default getSingleApple
