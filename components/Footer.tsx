import Image from 'next/image';
import headerPic from '../public/assets/header.png';

export function Footer() {
  return (
    <>
      <footer className="container">
        <hr className="divider my-3" />
        <div className="boxes my-5">
          <div className="row">
            <div className="box-left col-lg-5">
              <div className="box1">
                <div className="title d-flex">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="31.328"
                    height="28.354"
                    viewBox="0 0 31.328 28.354"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="3.051"
                        y1="-0.176"
                        x2="-10.023"
                        y2="3.448"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset="0" stopColor="#c51f4a" />
                        <stop offset="1" stopColor="#f15b27" />
                      </linearGradient>
                      <linearGradient
                        id="linear-gradient-2"
                        x1="2.769"
                        y1="-0.616"
                        x2="-10.935"
                        y2="6.588"
                        xlinkHref="#linear-gradient"
                      />
                    </defs>
                    <g id="a7-logo" transform="translate(-2.81 -154.99)">
                      <path
                        id="Caminho_273"
                        data-name="Caminho 273"
                        d="M18.911,168.259a8.936,8.936,0,0,1,2.461-.612c.129-.214.255-.43.385-.643,1.413-2.317,1.529-4.155-.035-6.348a65.266,65.266,0,0,1-3.241-5.665L2.81,183.312c3.041,0,5.545-.069,8.042.028a2.608,2.608,0,0,0,2.7-1.6q.468-.867.933-1.736a8.481,8.481,0,0,1-.82-3.005A8.368,8.368,0,0,1,18.911,168.259Z"
                        transform="translate(0 0)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Caminho_274"
                        data-name="Caminho 274"
                        d="M1275.611,1602a6.542,6.542,0,0,0-7.3-2.8,7.8,7.8,0,0,0-1.018.332,7.019,7.019,0,0,0-4.388,7.352,7.252,7.252,0,0,0,.3,1.532,6.379,6.379,0,0,0,5.554,4.637c4.179.353,8.411.085,13.244.085C1279.739,1609.154,1277.874,1605.447,1275.611,1602Z"
                        transform="translate(-1247.864 -1430.004)"
                        fill="url(#linear-gradient-2)"
                      />
                    </g>
                  </svg>
                  <h3>Get in touch!</h3>
                </div>
                <div className="text-and-image row">
                  <p className="p-display-low p-white col-7">
                    If you want to work together on a project or just have a
                    chat, please don&apos;t hesitate to contact me via email below.
                  </p>
                  <div className="img-fluid col-5">
                    <Image
                      src={headerPic}
                      alt="Icon Alyson"
                      layout="responsive"
                    />
                  </div>
                </div>
                <button className="btn-red w-100 my-3" type="button">
                  Send me an email
                </button>
              </div>
            </div>
            <div className="box-right col-lg-7">
              <div className="box text-center text-lg-end my-5 my-lg-0">
                <div className="links">
                  <a href="#" aria-Current="work">
                    <h3 className="pb-1 active">WORK</h3>
                  </a>
                  <a href="#">
                    <h3 className="pb-1 link-hold">PORTIFOLIO</h3>
                  </a>
                  <a href="#">
                    <h3 className="pb-1 link-hold">ABOUT</h3>
                  </a>
                </div>
              </div>
              <div className="box">
                <ul className="d-flex flex-row justify-content-center justify-content-lg-end px-0">
                  <li>
                    <a
                      href="https://github.com/alysonvilela/"
                      className="px-2 p-white"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/a7yson"
                      className="px-2 p-white"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitch.tv/a7yson" className="px-2 p-white">
                      <i className="fab fa-twitch"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div />
          <div />
          <div />
        </div>
      </footer>
    </>
  );
}
