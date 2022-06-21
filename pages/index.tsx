import { SeoTags } from '../components/SeoTags';
import Head from 'next/head';

export default function Home() {
  // SEO should be returned by GQL
  const patternName = ' - Alyson Vilela | Front-end Developer | UX/UI';
  const title = "Hi, I'm Alyson Vilela";
  const description =
    'I develop civil engeneering projects and interfaces for apps and websites.';

  return (
    <>
      <Head>
        <title>
          {title} {patternName}
        </title>
        <SeoTags title={title} desc={description} img="imagem" />
      </Head>
      <section id="home">
        <h1>{title}</h1>
        <p className="p-display">{description}</p>
      </section>
    </>
  );
}
