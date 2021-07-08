import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const About = () => {
  const router = useRouter();
  return (
    <div className="container p-white">
      Hey, You are on About
      <div className="text-center p-white">
        <li className={router.pathname == "/" ? "active" : ""}><Link href="/"><a>Home</a></Link></li>
        <li className={router.pathname == "/portfolio" ? "active" : ""}><Link href="portfolio"><a>Portfolio</a></Link></li>
        <li className={router.pathname == "/about" ? "active" : ""}><Link href="/about"><a>About</a></Link></li>
        </div>
    </div>
  )
}

export default About
