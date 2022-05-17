import { gql } from 'graphql-request'

export const GET_PTFS = gql`
query ViewPortfolio {
    ptfs {
      id
      title
      slug
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

export const GET_POSTS_PATHS = gql`
query PostsPaths {
    ptfs {
      slug
    }
  }
`

export const GET_SINGLE_POST = gql`
query SinglePost($slug: String!) {
    ptfs(where: { slug: $slug }) {
      id
      title
      slug
      description
      content {
        html
      }
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