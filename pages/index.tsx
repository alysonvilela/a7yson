import Image from 'next/image';
import headerPic from '../public/assets/header.png';
import { useRouter } from 'next/router';
import Link  from 'next/link';
import headIllu from '../public/assets/icons/head-illustration.svg'
import aDev from '../public/assets/icons/a7-dev.svg'
import aEdu from '../public/assets/icons/a7-edu.svg'


export default function Home() {

  return (
    <>
      <section id="home">
        <div className="container py-3 py-md-5">
            <div className="text-par col-12 text-center w-75 w-lg-50 mx-auto py-4">
                <h1>Hi, I&apos;m Alyson</h1>
                <p className="p-display">I develop civil engeneering projects and interfaces for apps and websites.</p>
            </div>
            <div className="pics col-8 col-md-4 mx-auto">
                <div><Image className="floating" src={headIllu} alt="Alyson's Illustration" width="432px" height="492.83" /></div>
            </div>
            <a href="#about">
                <div className="scroll-down floating-4"></div>
            </a>
        </div>
    </section>

    <section id="about">
        <div className="container py-3 py-md-5">
            <div className="row">
                <div className="text-part text-center text-md-start col-12 col-lg-4">
                    <h2>Who I am</h2>
                    <p>I&apos;ve been a UX and UI designer for over 5 years, a web development enthusiast and passionate about problem solving (physics or not).</p>
                    <p>I&apos;m also learning and sharing educational subjects on my <a className="p p-purple" href="https://twitch.tv/a7yson">Twitch</a> channel.</p>
                    <Link href="/about"><a className="btn-red btn-blue-transparent w-100 my-3">More about me</a></Link>
                </div>
                <div className="pics d-flex justify-content-center align-center col-12 col-lg-8">
                    <div className="text-part col">
                        <div className="a7title">
                            <h4>A7</h4>
                            <h3 className="p-red">DEV</h3>
                        </div>
                        <div className="pb-3 "><Image className="img-fluid mx-auto pe-1 p-md-2 floating-2" src={aDev} alt="Development icon"/></div>
                    </div>
                    <div className="text-part col">
                        <div className="a7title">
                            <h4>A7</h4>
                            <h3 className="p-blue">EDU</h3>
                        </div>
                        <div className="pb-3"><Image className="img-fluid mx-auto ps-1 p-md-2 floating-3" src={aEdu} alt="Education icon"/></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
