import Link from 'next/link';

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand" href="#">
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
            Alyson Vilela
          </a>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="pe-0 nav-link active" aria-Current="work" href="#">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="pe-0 nav-link" href="portfolio.html">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="pe-0 nav-link" href="about.html">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
