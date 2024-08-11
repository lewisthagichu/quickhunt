import styles from './footer.module.scss';
import Link from 'next/link';

function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="255.000000pt"
              height="155.000000pt"
              viewBox="0 0 255.000000 155.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,155.000000) scale(0.100000,-0.100000)"
                fill="#1c1d20"
                stroke="none"
              >
                <path
                  d="M231 1152 l-191 -188 0 -336 c0 -297 2 -337 16 -342 9 -3 186 -6 395
-6 372 0 379 0 379 20 0 19 -7 20 -257 23 -142 1 -310 2 -373 2 l-115 0 -3
305 -2 305 175 175 175 175 137 -135 c214 -210 232 -225 243 -214 8 8 -2 27
-33 65 -46 56 -336 339 -348 339 -3 0 -92 -85 -198 -188z"
                />
                <path
                  d="M226 901 c-7 -11 -2 -399 5 -404 2 -2 37 -1 76 2 96 8 108 20 108
110 0 51 -4 74 -17 88 -16 17 -16 22 -3 39 23 31 19 108 -7 138 -19 21 -36 27
-89 32 -44 4 -69 3 -73 -5z m122 -100 c4 -37 -12 -61 -39 -61 -16 0 -19 8 -19
54 l0 54 28 -7 c21 -6 28 -14 30 -40z m2 -140 c17 -33 12 -89 -9 -101 -43 -23
-51 -14 -51 55 0 62 1 65 25 65 14 0 29 -8 35 -19z"
                />
                <path
                  d="M534 891 l-31 -19 -8 -157 -7 -157 28 -29 c23 -24 36 -29 74 -29 57
0 75 13 89 65 14 50 14 218 1 266 -19 69 -87 97 -146 60z m80 -57 c8 -20 8
-248 0 -268 -8 -22 -31 -20 -44 3 -11 21 -14 263 -3 274 12 13 41 7 47 -9z"
                />
                <path
                  d="M760 705 l0 -205 30 0 30 0 1 128 2 127 20 -127 21 -128 32 0 32 0
18 118 19 117 3 -117 3 -118 29 0 30 0 0 205 0 205 -39 0 c-22 0 -42 -3 -44
-7 -3 -5 -13 -60 -22 -123 -9 -63 -20 -119 -24 -123 -5 -4 -16 43 -26 105 -22
142 -25 148 -75 148 l-40 0 0 -205z"
                />
                <path
                  d="M1174 902 c-7 -4 -24 -83 -38 -177 -15 -93 -29 -183 -32 -198 -6 -26
-4 -28 22 -25 20 2 30 10 34 27 12 54 83 54 95 0 6 -25 11 -30 33 -27 32 4 32
2 1 208 -28 187 -33 200 -72 200 -18 0 -37 -4 -43 -8z m51 -183 c7 -46 11 -87
8 -91 -7 -13 -53 -9 -53 5 0 27 23 177 27 173 2 -2 10 -42 18 -87z"
                />
                <path
                  d="M1515 859 c-4 -30 -5 -121 -3 -204 l3 -150 73 -3 c66 -3 74 -1 97 22
21 21 25 34 25 84 0 43 -5 66 -19 83 -17 22 -17 27 -5 44 8 10 14 40 14 66 0
71 -26 96 -112 105 l-66 6 -7 -53z m123 -58 c4 -37 -12 -61 -39 -61 -16 0 -19
8 -19 54 l0 54 28 -7 c21 -6 28 -14 30 -40z m2 -140 c25 -47 5 -111 -35 -111
-24 0 -25 3 -25 65 0 62 1 65 25 65 14 0 29 -8 35 -19z"
                />
                <path
                  d="M1824 892 l-31 -20 -6 -158 -6 -159 26 -27 c21 -22 36 -28 71 -28 58
0 79 13 92 58 13 47 13 226 0 273 -19 69 -87 97 -146 61z m80 -58 c8 -20 8
-248 0 -268 -8 -22 -31 -20 -44 3 -11 21 -14 263 -3 274 12 13 41 7 47 -9z"
                />
                <path
                  d="M2050 705 l0 -205 30 0 c29 0 30 2 31 45 1 25 3 50 4 55 1 6 3 21 4
35 1 17 7 25 20 25 29 0 39 -20 47 -92 6 -64 8 -66 36 -70 l30 -5 -4 78 c-3
46 -11 87 -20 101 -14 21 -14 26 0 46 18 27 20 119 3 150 -13 25 -67 42 -133
42 l-48 0 0 -205z m126 98 c4 -19 2 -45 -5 -59 -12 -28 -51 -33 -52 -6 0 9 -2
35 -3 57 -3 51 -2 53 29 48 19 -4 26 -13 31 -40z"
                />
                <path
                  d="M2383 902 c-7 -4 -23 -82 -37 -172 -14 -91 -28 -180 -32 -198 -5 -32
-4 -33 23 -30 19 2 29 10 33 27 7 32 31 45 63 37 20 -5 27 -13 27 -32 0 -16 7
-27 23 -33 30 -12 42 2 39 47 -6 79 -53 336 -63 349 -12 14 -57 17 -76 5z m52
-183 c7 -46 11 -87 8 -91 -2 -5 -15 -8 -29 -8 -17 0 -24 5 -24 20 0 33 22 171
27 166 2 -2 10 -42 18 -87z"
                />
                <path
                  d="M1950 415 c0 -9 5 -15 11 -13 6 2 11 8 11 13 0 5 -5 11 -11 13 -6 2
-11 -4 -11 -13z"
                />
                <path
                  d="M1816 379 c-17 -25 -22 -84 -7 -93 12 -8 41 4 41 16 0 5 -4 6 -10 3
-6 -3 -10 5 -10 19 0 14 8 29 18 35 16 9 16 11 1 26 -15 16 -18 15 -33 -6z"
                />
                <path
                  d="M914 369 c-3 -6 -7 -28 -9 -48 -1 -20 -5 -46 -9 -58 -6 -19 -4 -23
14 -23 16 0 20 4 16 15 -3 10 1 18 12 22 30 11 62 46 62 69 0 31 -18 40 -38
20 -15 -15 -15 -16 1 -16 22 0 22 -12 -3 -41 l-19 -24 -1 48 c0 45 -11 60 -26
36z"
                />
                <path
                  d="M1125 372 c-4 -4 -16 -7 -27 -7 -17 0 -21 -8 -24 -42 -4 -45 10 -58
21 -21 4 11 18 31 32 44 13 12 20 25 15 28 -5 3 -12 2 -17 -2z"
                />
                <path
                  d="M1221 354 c-24 -30 -26 -45 -9 -62 17 -17 35 -15 58 8 34 34 22 80
-20 80 -5 0 -18 -12 -29 -26z m37 -21 c-4 -34 -28 -43 -28 -10 0 25 7 37 22
37 5 0 8 -12 6 -27z"
                />
                <path
                  d="M1369 373 c-1 -4 -1 -12 0 -16 1 -8 -16 -76 -26 -103 -3 -9 2 -14 16
-14 14 0 21 6 21 20 0 11 6 20 13 20 18 0 67 53 67 72 0 23 -18 32 -36 18 -10
-9 -11 -16 -4 -25 7 -9 5 -19 -9 -36 l-20 -24 2 44 c1 28 -3 45 -10 48 -7 3
-14 1 -14 -4z"
                />
                <path
                  d="M1542 364 c-43 -30 -21 -99 26 -79 16 8 16 8 0 12 -24 6 -23 18 4 35
14 9 19 20 15 31 -8 21 -16 21 -45 1z m28 -8 c0 -3 -4 -8 -10 -11 -5 -3 -10
-1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z"
                />
                <path
                  d="M1716 373 c-4 -4 -16 -8 -28 -8 -17 0 -21 -8 -24 -42 -5 -51 9 -55
32 -10 9 17 23 36 30 40 15 9 19 27 6 27 -5 0 -12 -3 -16 -7z"
                />
                <path
                  d="M1934 369 c-10 -17 -15 -89 -6 -89 18 1 27 18 30 58 3 40 -9 55 -24
31z"
                />
                <path
                  d="M2080 360 c0 -11 -5 -20 -11 -20 -6 0 -8 7 -5 17 6 15 4 15 -14 -2
-41 -37 -10 -93 37 -66 16 9 16 10 -4 11 -30 0 -29 10 4 35 15 13 23 27 19 33
-11 19 -26 14 -26 -8z"
                />
                <path
                  d="M2188 369 c-22 -12 -23 -38 -3 -45 8 -4 15 -13 15 -20 0 -12 -4 -12
-21 -3 -17 9 -20 8 -17 -3 7 -19 43 -22 58 -4 10 13 9 20 -4 41 -16 24 -16 25
6 25 19 0 20 2 8 10 -18 12 -21 12 -42 -1z"
                />
              </g>
            </svg>
          </div>
          <p>Explore, discover, move in.</p>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <h3>Company</h3>
            <Link href="#">About Us</Link>
            <Link href="#">Properties</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">Contact</Link>
          </div>
          <div className={styles.links}>
            <h3>Socials</h3>
            <a href="https://github.com/lewisthagichu">Github</a>
            <a href="https://dev.to/thagichucodes">DEV</a>
            <a href="https://www.linkedin.com/in/lewis-thagichu/">Linkedin</a>
            <a href="https://x.com/thagichucodes">Twitter</a>
          </div>
          <div className={styles.links}>
            <h3>Legal</h3>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Licences</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          <span className="btn-text">
            © 2024 Lewis Thagichu. All rights reserved
          </span>
        </p>
      </div>
    </section>
  );
}

export default Footer;
