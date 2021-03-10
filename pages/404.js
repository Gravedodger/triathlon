import React from 'react';
import Link from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router';

const NoMatch = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])
  return (
    <div className="not-found">
      <h1>Упс...</h1>
      <h2>Сторінку не знайдено</h2>
      <p>Повернутися до <Link href="/"><a>стартової сторінки</a></Link></p>
    </div>
  );
};

export default NoMatch;
