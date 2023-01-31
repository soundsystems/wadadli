import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Header from "../components/Header";
import Map from "../components/Map";
import Gallery from "../components/Gallery";
import Image from "next/image";
import bgImage from "../public/bg.webp";
import Footer from "../components/Footer";
import LogRocket from 'logrocket';

if (typeof window === "undefined") {LogRocket.init('vdixgc/wadadli');}


const Home: NextPage = () => {
  return (
    <>
      <Image
        src={bgImage}
        alt="background treasure map texture"
        fill
        className="pointer-events-none z-0 h-screen w-screen object-cover object-center"
      />
      <div className="-z-10 mx-auto h-screen snap-y snap-mandatory overflow-scroll text-zinc-50">
        <Head>
          <title>Wadadli Jerk | Authentic Antiguan Cuisine</title>
          <meta name="description" content="Wadadli Jerk | Authentic Antiguan Cuisine" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          {/* <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="Wadadli Jerk" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />           */}
        <Script src="../components/Map.tsx" type="text/partytown" />
        </Head>

        {/* Header */}
        <Header />
<main>
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Map />
        </section>

        {/* Menu 
        <section id="menu" className="snap-center"></section> */}

        {/* Gallery */}
        <section id="gallery" className="h-screen snap-end">

          <Gallery />
        </section>

        {/* Contact Us */}
        <section id="contact" className="snap-center"></section>
</main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
export default Home;
