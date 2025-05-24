import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "./Footer.module.css";

const inter = Inter({ subsets: ["latin"] });

export const Footer = () => {
  return (
    <footer className={`${inter.className} ${styles.footer}`}>
      <p>
        Copyright &copy; 2010-{new Date().getFullYear()} Courage Window
        Cleaning. All Rights Reserved.
      </p>
      <p>
        Courage window cleaning, a window cleaning business operating in Ealing,
        Chiswick, Park Royal, Acton, Brentford and surrounding areas.
      </p>
      <p>We Are an official member of the Federation of Window Cleaners.</p>
      <a href="https://www.f-w-c.co.uk/">
        <Image
          src="/federation-logo.png"
          width={400}
          height={400}
          alt="federation of window cleaners logo"
          className={styles.federationLogo}
        />
      </a>

      <address>
        Courage Window Cleaning,
        <br />
        25 Cuckoo Avenue,
        <br />
        W7 1BP
      </address>
    </footer>
  );
};
