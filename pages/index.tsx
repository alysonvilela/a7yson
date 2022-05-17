import Image from 'next/image';
import headerPic from '../public/assets/header.png';
import { useRouter } from 'next/router';
import { SeoTags } from '../components/SeoTags';
import Head from 'next/head';
import Link from 'next/link';
import headIllu from '../public/assets/icons/head-illustration.svg';
import aDev from '../public/assets/icons/a7-dev.svg';
import aEdu from '../public/assets/icons/a7-edu.svg';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_POSTS_PATHS } from '../services/graphql/queries';

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
