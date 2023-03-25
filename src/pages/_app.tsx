import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Inter_Tight, Overpass_Mono } from "next/font/google";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: "variable",
});

const overPassMono = Overpass_Mono({
  subsets: ["latin"],
  weight: "variable",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-overpass-mono: ${overPassMono.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <title>Shakil Ahmed</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
