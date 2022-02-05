import {gql} from 'graphql-request'
import graphQLClient from './index'

const GET_ALL_PRODUCTS = gql`
  query getAllProducts {
    applesCollection {
      items {
        sku
        product
        description
        price
        image {
          url
        }
        sys {
          id
        }
      }
    }
  }
`

const getAllApples = async () => {
  const query = gql`
    query getAllProducts {
      applesCollection {
        items {
          sku
          product
          description
          price
          image {
            url
          }
          sys {
            id
          }
        }
      }
    }
  `

  const response = await graphQLClient.request(query)
  const data = JSON.parse(JSON.stringify(response))
  return data.applesCollection.items
}

export default getAllApples
