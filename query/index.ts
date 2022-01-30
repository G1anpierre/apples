import {GraphQLClient} from 'graphql-request'

const graphQLClient = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
  },
)

export default graphQLClient
