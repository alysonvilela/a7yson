import React from 'react';
import Head from 'next/head';
import { SeoTags } from '../../components/SeoTags';

const About = () => {
  const patternName = ' - Alyson Vilela | Front-end Developer | UX/UI';
  const title = 'About';
  const description = 'Page in Construction';

  return (
    <>
      <Head>
        <title>
          {title} {patternName}
        </title>
        <SeoTags title={title} desc={description} img="imagem" />
      </Head>
      <h1> ABOUT PAGE S</h1>
    </>
  );
};

export const getStaticProps = async () => {


  return {
    props: {},
    revalidate: 60 * 60 * 8,
  };
}

export default About;
