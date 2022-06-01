import Head from "next/head";
import Image from "next/image";
import { Footer, JoinPage, Navbar } from "../../components";
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
