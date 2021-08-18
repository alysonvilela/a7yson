import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import firstIcon from '../../public/assets/memojis/hey.svg';
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

      <section id="introAbout">
        <div className="container py-3 py-md-5">
          <div className="row align-items-end justify-content-center">
            <div className="cont-large col-lg-7 p-white">
              <img src="./assets/memojis/hey.svg" alt="Alyson's character'" />
              {/* <Image
                src={firstIcon}
                alt="My Image"
                unoptimized
              /> */}
              <div className="miniContainer">
                <h3>What I do ?</h3>
                <ul>
                  <li>UX / UI designing</li>
                  <li>Front-end developing</li>
                  <li>Civil Engeneering</li>
                </ul>
                <a
                  href="https://linkedin.com/in/alysonvilela"
                  className="btn btn-red"
                >
                  {' '}
                  Hire me!
                </a>
              </div>
            </div>
            <div className="intro-text col-lg-5">
              <div className="text-part text-md-start">
                <h1>Hey 👋</h1>
                <p className="p-white">
                  I'm so excited that you are here. Hope you like my mission and
                  my work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text py-3 py-md-5">
        <div className="container">
          <div className="row">
            <div className="textArea">
              <div className="greenpart">
                <div className="text col-lg-6">
                  <h2>I WAS ONLY 9 YO WHEN...</h2>
                  <p>
                    Everything starts. Whitout a computer, my daily fun was pass
                    all day long playing Counter-Strick on a lan-house with my
                    cousin Vinicius and my Friend Guilherme.
                  </p>
                  <p>
                    One day, we've met Tibia. Hunting rats and rotworms was our
                    diary addicting, but without a penny to pay Premium Account,
                    we've seen other way to have more fun.
                  </p>
                  <p>
                    Then we've started play OT's, wich was non official server
                    that allow us to play the hole game for free.
                  </p>
                  <p>
                    <span className="p-green">
                      "But, what if I got my own server?"
                    </span>
                    , and that's what I did!
                  </p>
                </div>
                <div className="img col-lg-6 d-none d-xl-flex">
                  <div className="cont-min col-lg-7 p-white">
                    <img
                      src="./assets/memojis/pensative.svg"
                      alt="Alyson's character thinking"
                    />
                    <div className="miniContainer blockOne"></div>
                  </div>
                </div>
              </div>

              <div className="bluepart">
                <div className="text col-lg-6">
                  <p className="quote">
                    I barely known that it was my beginning with{' '}
                    <span className="p-blue">development</span>...
                  </p>
                  <h2>.lua, php and a ton o curiosity</h2>
                  <p>
                    At first, what I've mostely liked was pass all day long
                    fixing bugs on hunting areas, spells, missions and creating
                    new cave-hunts for players get level up, and for this i've
                    used a language called by
                    <span className="p-blue"> LUA</span>.
                  </p>
                  <p>
                    A lot of time was spent reading forums posts where I could
                    known more thing about custom functionalities for the
                    server, one of those funcitonalities was create a new
                    website for new players met the server easily. And then I've
                    started learning a bit of{' '}
                    <span className="p-blue">PHP and Apache </span>.
                  </p>
                  <p className="quote">
                    And everything ended in <span className="p-red">smoke</span>
                    ...
                  </p>
                </div>
                <div className="img col-lg-6 d-none d-xl-flex">
                  <div className="greenpart d-flex justify-content-center">
                    <div className="cont-min col-lg-7 p-white">
                      <img
                        src="./assets/memojis/boom.svg"
                        alt="Alyson's character curiosity"
                      />
                      <div className="miniContainer blockTwo"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="redpart">
                <div className="text col-lg-6">
                  <h2>Suddenly, 14</h2>
                  <p>
                    My routine started to change, studies, pressure about
                    carrer, ENEM(a national test for going to university)
                  </p>
                  <p>
                    But as I learned a lot in the past creating my own OT
                    server, mainly about{' '}
                    <span className="p-red">graph design</span>, aI also ended
                    up spending a lot of time creating and editing photos,
                    banners, montages{' '}
                    <span className="p-red">
                      ffor free, just because I loved it
                    </span>
                    .
                  </p>

                  <h2 className="mt-6">
                    The passion for creating and delivering
                  </h2>
                  <p>
                    At 17, with some graphic design freelances already in hand,
                    I started working in a company that developed toys and
                    developed my first product within the company.
                  </p>
                  <p>
                    TEvery part of the design, quotation and feasibility was
                    done, but unfortunately the project didn't go forward,
                    however I discovered my passion -{' '}
                    <span className="p-red">CREATE AND DELIVER</span>.
                  </p>
                  <p>
                    At 19 I started studying Civil Engineering at the Federal
                    Institute of São Paulo while I became a professional in{' '}
                    <span className="p-red">UX and UI Design</span>.
                  </p>
                  <p></p>
                </div>
                <div className="img col-lg-6 d-none d-xl-flex">
                  <div className="greenpart d-flex justify-content-center">
                    <div className="cont-min col-lg-7 p-white">
                      <img
                        src="./assets/memojis/love.svg"
                        alt="Alyson's character curiosity"
                      />
                      <div className="miniContainer blockThree"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="returns">
        <div className="container">
          <div className="cont-xl p-white py-3 py-md-5">
            <img src="./assets/memojis/nerd.svg" alt="Alyson's character'" />
            <div className="miniContainer">
              <p className="p-white">Then my world become coding again.</p>
              <h2>React, Next.JS, WP and Strapi</h2>
            </div>
          </div>
          <div className="greenpart justify-content-center">
            <div className="text col-lg-6">
              <p>
                The world turns, one step follows the next, and the life
                reintroduced to code again, Guilherme recommended some courses
                because I was trying to do some systems on university and i just
                fell in love for bugs (and solving them).
              </p>
              <p>
                Today I still study Civil Engeering and in the near future I'm
                gonna cross both areas. I'm also coding in{' '}
                <span className="p-purple">
                  HTML, CSS, JS, TSX, Reactjs, Nextjs
                </span>{' '}
                and share all my steps and learnings from coding and UX/UI on my
                Twitch channel called{' '}
                <span className="p-purple">
                  <a className="p p-purple" href="https://twitch.tv/a7yson">
                    a7yson
                  </a>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
