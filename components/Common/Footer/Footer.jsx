import Image from 'next/image';
import styles from './Footer.module.scss';
import Link from 'next/link';
import logo from '@/public/images/logo2.jpeg';

export default function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <div className={styles.logoContainer}>
              <Image src={logo} alt="logo" sizes="33vw" fill />
            </div>
          </div>
          <p>Explore, discover, move in.</p>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <h3>Company</h3>
            <Link href="about-us">
              <span className="link-underline">About Us</span>
            </Link>
            <Link href="/properties">
              <span className="link-underline">Properties</span>
            </Link>
            <Link href="/#faq">
              <span className="link-underline">FAQ</span>
            </Link>
            <Link href="/contact">
              <span className="link-underline">Contact</span>
            </Link>
          </div>
          <div className={styles.links}>
            <h3>Socials</h3>
            <a href="https://github.com/lewisthagichu" target="_blank">
              <span className="link-underline">Github</span>
            </a>
            <a href="https://dev.to/thagichucodes" target="_blank">
              <span className="link-underline">DEV</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lewis-thagichu/"
              target="_blank"
            >
              <span className="link-underline">Linkedin</span>
            </a>
            <a href="https://x.com/thagichucodes" target="_blank">
              <span className="link-underline">Twitter</span>
            </a>
          </div>
          <div className={styles.links}>
            <h3>Legal</h3>
            <a href="#">
              <span className="link-underline">Term</span>
            </a>
            <a href="#">
              <span className="link-underline">Privacy</span>
            </a>
            <a href="#">
              <span className="link-underline">Licences</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          <span>© 2024 QuickHunt. All rights reserved</span>
        </p>
      </div>
    </section>
  );
}
