import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Head from 'next/head';
import { SeoTags } from '../../components/SeoTags';


const About = () => {
  const patternName = " - Alyson Vilela | Front-end Developer | UX/UI"
  const title = "Page in Construction"
  const description = "Page in Construction"

  return (
    <>
    <Head>
    <title>{title} {patternName}</title>
    <SeoTags title={title} desc={description} img="imagem"/>
    </Head>
    <div className="container error-page text-center">
      <h1>👷‍♀️👷‍♂️</h1>
      <h2>{title}</h2>
      <p>Meet me at <a href="https://twitch.tv/a7yson"><span className="p p-purple">Twitch</span></a></p>
    </div>
    </>
  )
}

export default About
