import Image from 'next/image';
import headerPic from '../public/assets/header.png';

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Hello World!!</h1>
        <Image src={headerPic} alt="Vercel Logo" />
      </div>
    </>
  );
}
