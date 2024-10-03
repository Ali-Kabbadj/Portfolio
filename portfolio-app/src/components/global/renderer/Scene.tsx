/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'
import React, { Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, Reflector, useTexture } from '@react-three/drei';
import {Avatar} from './Avatar';
import { useControls } from 'leva'
import * as THREE from 'three'

// styling using twailwind and css variables
export default function Scene() {
const envProps = useControls({ background: false })
   return (
      <Canvas
         camera={{ position: [0, 0, 10], fov: 20, near: 0.1, far: 1000 }}
         style={{ height: '100%', width: '100%' , margin: '0px', padding: '0px' ,top: '10%' , left: '0%' , position: 'absolute'}}
         shadows
         dpr={[1, 2]}
      >
          <Environment {...envProps} files="adams_place_bridge_1k.hdr" />
         <ambientLight intensity={7} />
         <spotLight position={ [10, 10, 10] }
         angle={0.15} penumbra={1} />
         <directionalLight position= {[-10, 10, 0]}
         intensity={1} />
         <OrbitControls enableZoom={false} enablePan={true} enableRotate={false} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI /2} />
         <Suspense fallback={null}>
               <Avatar/>
                <Intro />
         </Suspense>
      </Canvas>
   );
}



function Intro() {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}
