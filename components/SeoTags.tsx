type SeoSettings= {
    title: string,
    desc: string,
    img: string,
  }




  export const SeoTags = (props: SeoSettings) => {
      const patternName = " - Alyson Vilela | Front-end Developer | UX/UI"
      const title = `${props.title} ${patternName}`
      const desc = `${props.desc} ${patternName}`
      
      return (
          <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={desc} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://a7yson.dev/" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={desc} />
          <meta property="og:image" content={props.img} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://a7yson.dev/" />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:image" content={props.img} />
          </>
      )
  }
    
  