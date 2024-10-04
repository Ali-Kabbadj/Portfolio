/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'
import React, { Suspense, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {  OrbitControls } from '@react-three/drei';
import {Avatar} from './Avatar';
import * as THREE from 'three'

// styling using twailwind and css variables
export default function Scene() {
   return (
      <Canvas
         camera={{ position: [0, 0, 10], fov: 50, near: 0.1, far: 1000 }}
         style={{ height: '100%', width: '100%' , margin: '0px', padding: '0px' ,top: '0%' , left: '0%' , position: 'absolute'}}
         shadows
         dpr={[1, 2]}
      >
         <ambientLight intensity={2} />
         <spotLight position={ [0, 0, 10] } intensity={1}
         angle={0.15} penumbra={1} />
         <directionalLight position= {[10, 10, 0]}
         intensity={1} />
         <OrbitControls enableZoom={false} enablePan={true} enableRotate={false} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI /2} />
         <Suspense fallback={null}>
               <Avatar/>
                <Intro />
                <SkyBox />
         </Suspense>
      </Canvas>
   );
}

function SkyBox() {
  // sky texture "/1.jpg",
   const { scene } = useThree()
   const loader = new THREE.CubeTextureLoader()
   scene.background = loader.load([
      "/1.jpg",
      "/2.jpg",
      "/3.jpg",
      "/4.jpg",
      "/5.jpg",
      "/6.jpg",
   ])
   return null
}



function Intro() {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 2, 3 + state.mouse.y * 2, 4), 0.02)
    state.camera.lookAt(0, 0, 0)
  })
}
