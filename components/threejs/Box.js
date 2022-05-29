import React,{ useRef, useState , useEffect } from "react";
import { Mesh } from "three";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from '../assets/a.png'
import { Suspense } from "react";
import { InstancedInterleavedBuffer } from "three";
import { Clock } from "three";
export default function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // if(hovered){
        const delta=new Clock()
        useFrame((clicked, delta) => {
            
            ref.current.rotation.x += delta*0.1
            ref.current.rotation.y += delta*0.1
            ref.current.rotation.z += delta*0.1
            if(hovered && delta<10){
                delta*=2
                ref.current.rotation.y +=Math.sin(delta)
                ref.current.rotation.x += delta
                ref.current.rotation.z += delta
            }
        })
    // }
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 2.5 : 1.5}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        {/* <boxGeometry args={[1, 1, 1]} />
         */}
        <octahedronBufferGeometry  attach="geometry" />

        <meshNormalMaterial attach='material'/>

      </mesh>
    )
  }
  