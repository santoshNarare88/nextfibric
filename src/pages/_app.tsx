import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { AppProps } from "next/app";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canel hollywood",
  description: "Canel hollywood",
};

const MyApp = ({ Component }: AppProps<any>): JSX.Element => {
  return (
    <div className={inter.className}>
      <div className="grid-container">
        <header className="header">
          <Image
            src={"/images/logo.svg"}
            alt="Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </header>
        <aside className="sidebar">
          <p>Template</p>
          <p>Fonts</p>
          <p>Logos</p>
          <p>Images</p>
        </aside>
        <main className="main-content">
          <Component />
        </main>
      </div>
    </div>
  );
};

export default MyApp;
