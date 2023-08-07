import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from 'next/image'
import Logo from '../../public/images/logo.svg'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canel hollywood",
  description: "Canel hollywood",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid-container">
          <header className="header">
            <Image
              src={Logo}
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
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
