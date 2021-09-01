import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const [counter, setCounter] = React.useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    let redirecting = setTimeout(() => {
      router.push('/');
    }, 5000);
    return () => clearInterval();
  }, [counter, router]);

  return (
    <div className="container error-page text-center">
      <h1>Oops 😥</h1>
      <h2>Página não encontrada</h2>
      <p>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        Error 404 - Beeing redirected toaklsdmikasdmi
=======
        Error 404 - Alo galera bate a mao e bate o pe
>>>>>>> Stashed changes
=======
        Error 404 - Alo galera bate a mao e bate o pe
>>>>>>> Stashed changes
        <Link href="/">
          <span className="p-red"> Home Page</span>asdaksdjias
        </Link>{' '}
        in {counter} seconds
      </p>
    </div>
  );
}
