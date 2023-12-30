import { Inter } from "next/font/google";
import styles from "./Navigation.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

type ActivePage = "home" | "services" | "areas" | "contact";

interface NavigationProps {
  activePage: ActivePage;
}

export const Navigation = ({ activePage }: NavigationProps) => {
  return (
    <header className={`${inter.className} ${styles.header}`}>
      <div>
        <Link href="/">
          <h1>courage window cleaning</h1>
          <h2>working in the west london area since 1980</h2>
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li data-is-active={activePage === "home"}>
            <Link href="/">Home</Link>
          </li>
          <li data-is-active={activePage === "services"}>
            <a href="/services">Services</a>
          </li>
          <li data-is-active={activePage === "areas"}>
            <a href="/areas">Areas</a>
          </li>
          <li data-is-active={activePage === "contact"}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
