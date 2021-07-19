import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Head from 'next/head';
import { SeoTags } from '../../components/SeoTags';


const About = () => {

  return (
    <>
    <Head>
    <title>Titulo</title>
    <SeoTags title="tituloaqui" desc="Aboutpage" img="imagem"/>
    </Head>
    <div className="container error-page text-center">
      <h1>👷‍♀️👷‍♂️</h1>
      <h2>Page in Construction</h2>
      <p>Meet me at <a href="https://twitch.tv/a7yson"><span className="p p-purple">Twitch</span></a></p>
    </div>
    </>
  )
}

export default About
