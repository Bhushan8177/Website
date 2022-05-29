import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as THREE from 'three'
import react,{useEffect,useRef,Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import Box from '../components/threejs/Box'
import { OrbitControls } from "@react-three/drei";
import { Landing,Bhushan, Work,Register } from "../components";
import { AmbientLight } from "three";

export default function Home() {
  
  return (
    <>
    
      {/* <h1>test</h1> */}
      
      <Landing />
      <Bhushan />
      <Work/>
      <Register/>
      {/* <Contact/> */}
    </>
  );
}
