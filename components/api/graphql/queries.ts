import { gql } from 'graphql-request'

export const GET_PTFS = gql`
query ViewPortfolio {
    ptfs {
      id
      title
      description
      principalPhoto {
        url
      }
      secondaryPhoto {
        url
      }
      terciaryPhoto {
        url
      }
    }
  }
  
`