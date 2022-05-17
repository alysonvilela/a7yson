import { gql } from "@apollo/client"

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
 {
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