

export function SeoHeader() {
    const seoWebsite = "https://a7yson.dev/"
    const seoImg = "https://a7yson.dev/img/socialgraph.png"
    const seoDescription = "Alyson Vilela - I Design Interactions and Experciece for Websites and Apps"
    const seoTitle = "Alyson Vilela - UX UI Designer and Engeneering"

    return (
        <>
        <meta charSet="UTF-8" />
        <meta http-Equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoWebsite} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={seoImg} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoWebsite} />
        <meta property="twitter:title" content={seoTitle} />
        <meta property="twitter:image" content={seoImg} />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous"></link>
        <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" />
        </>
    )
}