import Head from "next/head";
import Image from "next/image";
import { Footer, JoinPage, Navbar } from "../../Components";
import styles from "../../styles/Home.module.css";

const Join = () => {
  return (
    <>
      <Navbar />
      <JoinPage />
      <Footer />
    </>
  );
};

export default Join;
