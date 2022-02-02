import gql from 'graphql-tag'
import apolloClient from './apollo-client'

export async function getAllPosts() {
  const {data} = await apolloClient.query({
    query: gql`
      query GetAllPosts {
        applesCollection {
          items {
            product
            description
            price
            image {
              url
            }
            sku
          }
        }
      }
    `,
  })
  return data.applesCollection.items
}

export async function getPostBySlug(sku) {
  const {data} = await apolloClient.query({
    query: gql`
      query GetPostBySku($sku: String!) {
        applesCollection(where: {sku: $sku}) {
          items {
            product
            description
            price
            image {
              url
            }
            sku
          }
        }
      }
    `,
    variables: {
      sku,
    },
  })
  return data.applesCollection.items[0]
}

export default {getAllPosts, getPostBySlug}
