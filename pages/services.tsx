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
      <Navigation activePage="services" />
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
          <h3>What We Do</h3>
          <p>
            Residential and Commercial regular window cleaning service. We clean
            offices, schools, residential care homes, hotels and blocks of flats
            for resident associations and management companies plus private
            houses and flats.
          </p>
          <p>
            We clean the windows on a regular basis on whatever frequency the
            customer wants, this can be from once a month or twice a year.
          </p>
          <p>We are happy to do just the outsides or both inside and out.</p>
          <p>Appointments made where necessary and always kept</p>
        </Box>
        <Box>
          <h3>Commerce & Industry</h3>
          <p>
            Offices, factories, schools, care homes, hotels, places of worship,
            shop units etc...
          </p>
          <p>
            We offer a professional window cleaning service. We cause minimum
            fuss and will do the work at a time to suit you. We will discuss
            with you all health and safety issues as your duty of care to us is
            the same as to your own employees. We aim to offer value for money,
            by providing a quality service at reasonable cost.{" "}
          </p>
          <h3>Blocks of Flats</h3>
          <p>
            If you are a block management company or residents association of a
            block of flats we would like to hear from you. The windows can be
            cleaned at different frequencies in the summer & winter if desired.
            It is the duty of the directors that all subcontractors operate
            within its health and safety guidelines, & by using us you can be
            assured that this will happen. If you would like clarification on
            the safe use of ladders & other health and safety issues to do with
            window cleaning then please feel free to contact us.
          </p>
          <h3>Private Housing and Flats</h3>
          <p>
            We offer a high quality service. Windows cleaned on a regular basis
            at whatever frequency you desire. We are happy to do inside and
            outsides or just the outsides. We take great care to avoid damaging
            flowers & shrubs. Our ladders have rubber tips to avoid damaging
            your paint work. Best of all we clean the windows properly & mop the
            sills. Where access is required we will ring you beforehand and be
            there at the appointed time.
          </p>
        </Box>
      </main>
      <Footer />
    </>
  );
}
