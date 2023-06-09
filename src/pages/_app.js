import "@/styles/globals.css";
import Head from "next/head";
import { Chewy, Andika, Oxygen } from "next/font/google";

const chewy = Chewy({
  subsets: ["latin"],
  variable: "--font-chewy",
  weight: "400",
});

const andika = Andika({
  subsets: ["latin"],
  variable: "--font-andika",
  weight: "400",
});

const oxygen = Oxygen({
  subsets: ["latin"],
  variable: "--font-oxygen",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Go Show</title>
      </Head>
      <div
        className={`${chewy.variable} ${andika.variable} ${oxygen.variable} `}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
