import Head from 'next/head';
import { SeoTags } from '../../components/SeoTags';
import PortfolioItems from '../../components/Portfolio/PortfolioItems';
import client from '../../components/api/graphql/client';
import { GET_PTFS } from '../../components/api/graphql/queries';
interface PortifolioIncomingInfosParam {
  ptfs: {
    id?: string | number;
    title: string;
    description: string;
    principalPhoto: { url: string };
    secondaryPhoto: { url: string };
    terciaryPhoto: { url: string };
  }[];
}

const Portfolio = ({ ptfs }: PortifolioIncomingInfosParam) => {
  const patternName = ' - Alyson Vilela | Front-end Developer | UX/UI';
  const title = 'Portfolio';
  const description = 'Meet how I usually start my projects and my processes.';
  console.log(ptfs);

  return (
    <>
      <Head>
        <title>
          {title} {patternName}
        </title>
        <SeoTags title={title} desc={description} img="imagem" />
      </Head>
      <section id="portfolioIntro" className="w-100">
        <div className="container py-3 py-md-5 vheight-75 justify-content-center">
          <div className="row text-center justify-content-center">
            <svg
              className="floating mb-4 me-0 ms-0"
              aria-Hidden="true"
              data-icon="briefcase"
              data-prefix="fas"
              focusable="false"
              role="img"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"
                fill="currentColor"
              />
            </svg>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </section>

      <section id="list">
        <div className="container">
          <h2 className="text-center">MY WORKFLOW</h2>
          <div className="row flex-column flex-md-row">
            <div className="col-md-6">
              <div className="py-2 d-flex align-items-center justify-content-between w-100">
                <span className="circSpanBloom circSpanBloom-red col-4 mx-auto">
                  1
                </span>
                <div className="textArea col-8">
                  <h3>🔍 Research</h3>
                  <p>
                    The first stage when I start some new project is doing
                    researches with potential users, looking for some{' '}
                    <span className="p-red">similar projects</span>, note
                    technologies and pre set possible structures.
                  </p>
                </div>
              </div>
              <div className="py-2 d-flex align-items-center justify-content-between w-100">
                <span className="circSpanUp circSpan-blue col-4 mx-auto">
                  2
                </span>
                <div className="textArea col-8">
                  <h3>💡 Concept</h3>
                  <p>
                    After brainstorming, it&apos;s time to write all design
                    concepts, do guidelines, and{' '}
                    <span className="p-blue">flowchart</span> the user
                    interactivity.
                  </p>
                </div>
              </div>
              <div className="py-2 d-flex align-items-center justify-content-between w-100">
                <span className="circSpanUp circSpan-green col-4 mx-auto">
                  3
                </span>
                <div className="textArea col-8">
                  <h3>🔨 Develop</h3>
                  <p>
                    The last one is just{' '}
                    <span className="p-green">do the thing</span>, look all the
                    design concepts, list which technologies will be used, and{' '}
                    <span className="p-green">start coding</span>.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-flex justify-content-end align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="293.773"
                height="493.75"
                viewBox="0 0 293.773 493.75"
              >
                <g transform="translate(-1260.023 -253.511)">
                  <path
                    d="M85.739,78h39.318V65.273H101.534V19.818h-15.8Zm65.682,0h41.818V65.273H167.216v-10h23.977V42.545H167.216v-10h26.136V19.818H151.42ZM219.6,32.545h17.5V78H252.67V32.545h17.5V19.818H219.6Zm85.8-12.727H295.17V43.341H305.4ZM363.466,38H378.58c-.057-11.42-8.864-18.977-22.955-18.977-13.835,0-23.608,7.443-23.523,18.523-.028,9.091,6.278,14.148,16.591,16.364l5.8,1.25c6.477,1.42,8.693,3.04,8.75,5.682-.057,2.869-2.67,4.886-7.727,4.886-6.051,0-9.631-2.841-9.886-8.182h-15c.057,14.6,9.943,21.136,25.114,21.136,14.744,0,23.58-6.364,23.636-17.841-.057-8.864-5.341-15.085-18.182-17.841l-4.773-1.023c-5.511-1.165-7.983-2.784-7.841-5.568.028-2.557,2.159-4.432,7.045-4.432C360.739,31.977,363.153,34.222,363.466,38Zm115.625,1.023h15.966c-1.222-11.676-11.818-20-25.568-20-15.682,0-28.409,10.8-28.409,30,0,18.409,11.534,29.773,28.523,29.773,15.227,0,26.136-9.318,26.136-25.227V45.5h-25.8V56.75h10.568c-.142,5.057-3.722,8.3-10.8,8.3-8.182,0-12.386-6.023-12.386-16.25,0-10.085,4.545-16.023,12.5-16.023C474.773,32.773,478.125,35.045,479.091,39.023Zm100.4,9.886c0-19.432-12.5-29.886-28.3-29.886-15.909,0-28.3,10.455-28.3,29.886,0,19.318,12.386,29.886,28.3,29.886C566.989,78.8,579.489,68.341,579.489,48.909Zm-16.25,0c0,10.455-4.2,16.136-12.045,16.136s-12.045-5.682-12.045-16.136,4.2-16.136,12.045-16.136S563.239,38.455,563.239,48.909Z"
                    transform="translate(1241 833) rotate(-90)"
                    fill="#cd2a44"
                    opacity="0.1"
                  />
                  <path
                    d="M85.739,78h39.318V65.273H101.534V19.818h-15.8Zm65.682,0h41.818V65.273H167.216v-10h23.977V42.545H167.216v-10h26.136V19.818H151.42ZM219.6,32.545h17.5V78H252.67V32.545h17.5V19.818H219.6Zm85.8-12.727H295.17V43.341H305.4ZM363.466,38H378.58c-.057-11.42-8.864-18.977-22.955-18.977-13.835,0-23.608,7.443-23.523,18.523-.028,9.091,6.278,14.148,16.591,16.364l5.8,1.25c6.477,1.42,8.693,3.04,8.75,5.682-.057,2.869-2.67,4.886-7.727,4.886-6.051,0-9.631-2.841-9.886-8.182h-15c.057,14.6,9.943,21.136,25.114,21.136,14.744,0,23.58-6.364,23.636-17.841-.057-8.864-5.341-15.085-18.182-17.841l-4.773-1.023c-5.511-1.165-7.983-2.784-7.841-5.568.028-2.557,2.159-4.432,7.045-4.432C360.739,31.977,363.153,34.222,363.466,38Zm115.625,1.023h15.966c-1.222-11.676-11.818-20-25.568-20-15.682,0-28.409,10.8-28.409,30,0,18.409,11.534,29.773,28.523,29.773,15.227,0,26.136-9.318,26.136-25.227V45.5h-25.8V56.75h10.568c-.142,5.057-3.722,8.3-10.8,8.3-8.182,0-12.386-6.023-12.386-16.25,0-10.085,4.545-16.023,12.5-16.023C474.773,32.773,478.125,35.045,479.091,39.023Zm100.4,9.886c0-19.432-12.5-29.886-28.3-29.886-15.909,0-28.3,10.455-28.3,29.886,0,19.318,12.386,29.886,28.3,29.886C566.989,78.8,579.489,68.341,579.489,48.909Zm-16.25,0c0,10.455-4.2,16.136-12.045,16.136s-12.045-5.682-12.045-16.136,4.2-16.136,12.045-16.136S563.239,38.455,563.239,48.909Z"
                    transform="translate(1319 833) rotate(-90)"
                    fill="#cd2a44"
                    opacity="0.2"
                  />
                  <path
                    d="M85.739,78h39.318V65.273H101.534V19.818h-15.8Zm65.682,0h41.818V65.273H167.216v-10h23.977V42.545H167.216v-10h26.136V19.818H151.42ZM219.6,32.545h17.5V78H252.67V32.545h17.5V19.818H219.6Zm85.8-12.727H295.17V43.341H305.4ZM363.466,38H378.58c-.057-11.42-8.864-18.977-22.955-18.977-13.835,0-23.608,7.443-23.523,18.523-.028,9.091,6.278,14.148,16.591,16.364l5.8,1.25c6.477,1.42,8.693,3.04,8.75,5.682-.057,2.869-2.67,4.886-7.727,4.886-6.051,0-9.631-2.841-9.886-8.182h-15c.057,14.6,9.943,21.136,25.114,21.136,14.744,0,23.58-6.364,23.636-17.841-.057-8.864-5.341-15.085-18.182-17.841l-4.773-1.023c-5.511-1.165-7.983-2.784-7.841-5.568.028-2.557,2.159-4.432,7.045-4.432C360.739,31.977,363.153,34.222,363.466,38Zm115.625,1.023h15.966c-1.222-11.676-11.818-20-25.568-20-15.682,0-28.409,10.8-28.409,30,0,18.409,11.534,29.773,28.523,29.773,15.227,0,26.136-9.318,26.136-25.227V45.5h-25.8V56.75h10.568c-.142,5.057-3.722,8.3-10.8,8.3-8.182,0-12.386-6.023-12.386-16.25,0-10.085,4.545-16.023,12.5-16.023C474.773,32.773,478.125,35.045,479.091,39.023Zm100.4,9.886c0-19.432-12.5-29.886-28.3-29.886-15.909,0-28.3,10.455-28.3,29.886,0,19.318,12.386,29.886,28.3,29.886C566.989,78.8,579.489,68.341,579.489,48.909Zm-16.25,0c0,10.455-4.2,16.136-12.045,16.136s-12.045-5.682-12.045-16.136,4.2-16.136,12.045-16.136S563.239,38.455,563.239,48.909Z"
                    transform="translate(1397 833) rotate(-90)"
                    fill="#cd2a44"
                    opacity="0.3"
                  />
                  <path
                    d="M85.739,78h39.318V65.273H101.534V19.818h-15.8Zm65.682,0h41.818V65.273H167.216v-10h23.977V42.545H167.216v-10h26.136V19.818H151.42ZM219.6,32.545h17.5V78H252.67V32.545h17.5V19.818H219.6Zm85.8-12.727H295.17V43.341H305.4ZM363.466,38H378.58c-.057-11.42-8.864-18.977-22.955-18.977-13.835,0-23.608,7.443-23.523,18.523-.028,9.091,6.278,14.148,16.591,16.364l5.8,1.25c6.477,1.42,8.693,3.04,8.75,5.682-.057,2.869-2.67,4.886-7.727,4.886-6.051,0-9.631-2.841-9.886-8.182h-15c.057,14.6,9.943,21.136,25.114,21.136,14.744,0,23.58-6.364,23.636-17.841-.057-8.864-5.341-15.085-18.182-17.841l-4.773-1.023c-5.511-1.165-7.983-2.784-7.841-5.568.028-2.557,2.159-4.432,7.045-4.432C360.739,31.977,363.153,34.222,363.466,38Zm115.625,1.023h15.966c-1.222-11.676-11.818-20-25.568-20-15.682,0-28.409,10.8-28.409,30,0,18.409,11.534,29.773,28.523,29.773,15.227,0,26.136-9.318,26.136-25.227V45.5h-25.8V56.75h10.568c-.142,5.057-3.722,8.3-10.8,8.3-8.182,0-12.386-6.023-12.386-16.25,0-10.085,4.545-16.023,12.5-16.023C474.773,32.773,478.125,35.045,479.091,39.023Zm100.4,9.886c0-19.432-12.5-29.886-28.3-29.886-15.909,0-28.3,10.455-28.3,29.886,0,19.318,12.386,29.886,28.3,29.886C566.989,78.8,579.489,68.341,579.489,48.909Zm-16.25,0c0,10.455-4.2,16.136-12.045,16.136s-12.045-5.682-12.045-16.136,4.2-16.136,12.045-16.136S563.239,38.455,563.239,48.909Z"
                    transform="translate(1475 833) rotate(-90)"
                    fill="#cd2a44"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="business-1">
          <div className="container py-3 py-md-5">
            <div className="row">
              {ptfs?.map(
                ({
                  id,
                  title,
                  description,
                  principalPhoto,
                  secondaryPhoto,
                  terciaryPhoto,
                }) => (
                  <PortfolioItems
                    key={id}
                    title={`${title}`}
                    description={description}
                    principalPhoto={principalPhoto?.url}
                    secondaryPhoto={secondaryPhoto?.url}
                    terciaryPhoto={terciaryPhoto?.url}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  const { ptfs } = await client.request(GET_PTFS);

  return {
    props: {
      ptfs,
    },
    revalidate: 15,
  };
};

export default Portfolio;
