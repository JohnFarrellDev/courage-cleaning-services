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
      <Navigation activePage="areas" />
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
            Based in Ealing we currently clean windows in Ealing, Chiswick, Park
            Royal, Acton, Hammersmith, Earls Court, Chelsea, Brentford and
            surrounding areas.
          </p>
          <p>
            We are listed on google maps, you can see our page by{" "}
            <a href="https://maps.app.goo.gl/FPa4muzB2NHB1PL39">
              clicking here
            </a>
            .
          </p>
        </Box>
      </main>
      <Footer />
    </>
  );
}
