import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { LandingSlide, Navbar, Footer } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>CPMC DYPCOE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingSlide />
      <Footer />
    </>
  );
}
