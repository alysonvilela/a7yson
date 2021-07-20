import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image';
import firstIcon from '../../public/assets/memojis/hey.svg'
import Head from 'next/head';
import { SeoTags } from '../../components/SeoTags';


const About = () => {
  const patternName = " - Alyson Vilela | Front-end Developer | UX/UI"
  const title = "About"
  const description = "Page in Construction"

  return (
    <>
    <Head>
    <title>{title} {patternName}</title>
    <SeoTags title={title} desc={description} img="imagem"/>
    </Head>
    
  <section id="introAbout">
    <div className="container py-3 py-md-5">
      <div className="row align-items-end justify-content-center">
        <div className="cont-large col-lg-7 p-white">
        <img src="./assets/memojis/hey.svg" alt="Alyson's character'"/>
          {/* <Image src={firstIcon}
                 alt="Icon Alyson, Hey!"
                 layout="responsive"
                    /> */}
          <div className="miniContainer">
            <h3>What I do ?</h3>
            <ul>
              <li>UX / UI designing</li>
              <li>Front-end developing</li>
              <li>Civil Engeneering</li>
            </ul>
            <a href="#" className="btn btn-red"> Hire me!</a>
          </div>
        </div>
        <div className="intro-text col-lg-5">
          <div className="text-part text-md-start">
            <h1>Hey 👋</h1>
            <p className="p-white">I'm so excited that you are here. Hope you like my mission and my work</p>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

export default About
