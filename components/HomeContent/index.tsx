import React from 'react';
import { useRouter } from 'next/router';
import style from './HomeContent.module.css';

type Props = {};

const HomeContent = (props: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div>
        <div className={style.home__container}>
            <video className={style.video__background} autoPlay loop muted>
                <source src="/assets/videos/background.mp4" type="video/mp4" />
            </video>
            <div className={style.content__overlay}>
                <h2>Welcome to Unimay Media!</h2>
                <p>Only the best voiceover is with us, join us now</p>
                <button className={style.button} onClick={() => router.push('/products')}>
                Join us
                </button>
            </div>
        </div>
    </div>
  );
};

export default HomeContent;