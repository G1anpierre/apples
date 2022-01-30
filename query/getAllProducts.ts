import {gql} from 'graphql-request'
import graphQLClient from './index'

const getAllApples = async () => {
  const query = gql`
    {
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
