import { GraphQLClient } from 'graphql-request'
import { request } from 'graphql-request'

const endpoint = process.env.GRAPHQL_HOST || ''
const token = process.env.GRAPHQL_TOKEN

const client = new GraphQLClient(endpoint, {
  headers: {
    authentication: `Bearer ${token}`
  },
  method: 'POST',
})

export default client