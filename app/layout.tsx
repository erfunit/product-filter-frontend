import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Header from "./components/Header";

const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "product filter",
  description:
    "this is a product filter project to train fullstack development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`w-screen min-h-screen bg-gray-700 flex flex-col justify-between text-white ${inter.className}`}
      >
        <Header />
        <main className="container 2xl:max-w-screen-xl m-auto mt-4 px-4">
          {children}
        </main>
        <footer className="w-full flex justify-center py-5 text-sm text-white/30 font-light">
          Allright reserved &nbsp;
          <a
            className="underline"
            target="_blank"
            href="https://github.com/erfunit"
          >
            &copy;erfunit
          </a>
        </footer>
      </body>
    </html>
  );
}
