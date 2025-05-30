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
      <Navigation activePage="contact" />
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317993.94079587725!2d-0.4178035611724515!3d51.488854352304315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d84f41fdda1%3A0xced3e8cc64983cae!2sCourage%20Window%20Cleaning%2C%20ealing%20%26%20london.!5e0!3m2!1sen!2suk!4v1703973495133!5m2!1sen!2suk"
            width="600"
            height="450"
            style={{ maxWidth: "100%" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <address>
            <p>25 Cuckoo Avenue, W7 1BP</p>
            Contact number: <a href="tel:+447710406869">07710 406869</a>
          </address>
        </Box>
      </main>
      <Footer />
    </>
  );
}
