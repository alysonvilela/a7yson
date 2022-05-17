export const GET_SINGLE_PORTFOLIO = `
query SinglePortfolio($slug: String!) {
  portfolio(where: {slug: $slug}) {
    id
    date
    id
    resume
    seos {
      title
      description
      keywords
    }
    slug
    tags
    title
    updatedAt
    gallery {
      id
      picture {
        url
      }
    }
  }
}
`