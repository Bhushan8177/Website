import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { Clock } from "three";

export default function Model({ ...props }) {
  const group = useRef();
  const delta = new Clock();
  useFrame((clicked, delta) => {
    group.current.rotation.y += delta * 0.1;
  });
  const { nodes, materials } = useGLTF("/demoModels.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.05}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, -30, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={75}
          >
            <mesh
              geometry={nodes["90_person__0"].geometry}
              material={materials["273_person__0"]}
            />
            <meshNormalMaterial attach="material" />
          </group>
          <group
            position={[0, -30, 30]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={75}
          >
            <mesh
              geometry={nodes["91_person__0"].geometry}
              material={materials["273_person__0"]}
            />
            <meshNormalMaterial attach="material" />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/demoModels.gltf");
