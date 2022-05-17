import Head from 'next/head';
import { SeoTags } from '../../components/SeoTags';
import { client } from '../../services/graphql/client';
import { GET_PTFS } from '../../services/graphql/queries';
interface PortifolioIncomingInfosParam {
  projects: {
    id?: string | number;
    title: string;
    description: string;
    principalPhoto: { url: string };
    secondaryPhoto: { url: string };
    terciaryPhoto: { url: string };
  }[];
}

const Portfolio = ({ projects }: PortifolioIncomingInfosParam) => {
  const patternName = ' - Alyson Vilela | Front-end Developer | UX/UI';
  const title = 'Portfolio';
  const description = 'Meet how I usually start my projects and my processes.';

  return (
    <>
      <Head>
        <title>
          {title} {patternName}
        </title>
        <SeoTags title={title} desc={description} img="imagem" />
      </Head>
      <pre>
        {JSON.stringify(projects, null, 2)}
      </pre>
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GET_PTFS,
  });

  return {
    props: {
      projects: data?.ptfs,
    },
    revalidate: 60 * 60 * 8,
  };
};

export default Portfolio;
