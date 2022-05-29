import Head from "next/head";
import Image from "next/image";
import { Footer, Navbar, TeamPage } from "../../components";
import styles from "../../styles/Home.module.css";

const Team = () => {
  return (
    <>
      <Navbar />
      <TeamPage />
      <Footer />
    </>
  );
};

export default Team;
