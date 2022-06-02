import React, { useRef, useState, useEffect } from "react";
import { Mesh } from "three";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../assets/a.png";
import { Suspense } from "react";
import { InstancedInterleavedBuffer } from "three";
import { Clock } from "three";
export default function Box(props) {
  const ref = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  const delta = new Clock();
  useFrame((clicked, delta) => {
    ref.current.rotation.x += delta * 0.5;
    ref.current.rotation.y += delta * 0.5;
    ref.current.rotation.z += delta * 0.5;
    if (hovered && delta < 10) {
      delta *= 2;
      ref.current.rotation.y += Math.sin(delta);
      ref.current.rotation.x += delta;
      ref.current.rotation.z += delta;
    }
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2.5 : 1.5}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <octahedronBufferGeometry attach="geometry" />

      <meshNormalMaterial attach="material" />
    </mesh>
  );
}
