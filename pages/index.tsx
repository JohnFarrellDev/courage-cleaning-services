import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Navigation } from "../Components/Navigation";
import { Box } from "../Components/Box";
import { Footer } from "../Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Courage Cleaning Services</title>
        <meta
          name="description"
          content="Courage window cleaning, operating in Ealing, Chiswick, Park Royal, Acton, Hammersmith, Earls Court, Chelsea, Brentford and surrounding areas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation activePage="home" />
      <main className={`${inter.className} ${styles.main}`}>
        <Box>
          <p>
            Interested in having your windows cleaned regularly in the West
            London area? Then phone Kevin on{" "}
            <a href="tel:+447710406869">07710 406869</a> and book yourself in
            for a free estimate.
          </p>
        </Box>
        <Box>
          <p>
            Courage window cleaning has been cleaning windows in the west london
            area since 1980. We pride our selves on our high standards and value
            for money.
          </p>
          <p>
            We clean in the traditional manor using ladders but also use water
            fed poles for 3 and 4 story work. We take safety very seriously
            providing method statements where required.
          </p>
          <p>
            We are insured, Health & Safety compliant and belong to the
            Federation of Window Cleaners. Our motto has always been
            &ldquo;Regular Reliable Service&rdquo; and we plan on keeping it
            that way
          </p>
          <Image
            src="/kevin-farrell-window-cleaner.jpg"
            width={600}
            height={600}
            alt="photo of kevin cleaning windows"
            className={styles.kevinPhoto}
          />
        </Box>
      </main>
      <Footer />
    </>
  );
}
