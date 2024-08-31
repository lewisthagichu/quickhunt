'use client';
import styles from './hero.module.scss';
import Image from 'next/image';
import heroImg from '@/public/images/hero2.webp';
import PropertySearchForm from '../../Common/PropertySearchForm/PropertySearchForm';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGlobalContext } from '@/context/GlobalContext';

export default function Hero() {
  const container = useRef(null);
  const { setHeaderStyle } = useGlobalContext();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: container.current,
      start: 'bottom 65vh',
      end: 'bottom top',
      onEnter: () =>
        setHeaderStyle({ background: '#ffffff', color: '#1c1d20' }),
      onLeaveBack: () =>
        setHeaderStyle({ background: 'transparent', color: '#ffffff' }),
      scrub: true,
    });
  }, []);

  return (
    <section ref={container} className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image src={heroImg} fill alt="image" placeholder="blur" />
        </div>
      </div>
      <div className={styles.textContainer}>
        <h3>
          Making <span>Renting</span> Effortless
        </h3>

        <p>Explore, discover and move in.</p>
      </div>
      <PropertySearchForm />
    </section>
  );
}
