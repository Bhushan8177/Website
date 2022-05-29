import Head from "next/head";
import Image from "next/image";
import { Navbar, ContactPage, Footer } from "../../Components";
import styles from "../../styles/Home.module.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
};

export default Contact;
