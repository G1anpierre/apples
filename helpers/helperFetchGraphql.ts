import {useQuery} from 'react-query'
import {request, gql} from 'graphql-request'

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/explore?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`

export function usePosts() {
  return useQuery('posts', async () => {
    const {
      data: {items},
    } = await request(
      endpoint,
      gql`
        query {
          {
            applesCollection {
              items {
                product
                description
                price
                image {
                  url
                }
              }
            }
          }
        }
      `,
    )
    return items
  })
}
