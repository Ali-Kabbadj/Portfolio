/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {Avatar} from './Avatar';

// styling using twailwind and css variables
export default function Scene() {

   return (
      <Canvas
         camera={{ position: [0, 0, 10], fov: 20, near: 0.1, far: 1000 }}
         style={{ height: '100%', width: '100%' , margin: '0px', padding: '0px' ,top: '10%'}}
         shadows
         dpr={[1, 2]}
      >
         <ambientLight intensity={7} />
         <spotLight position={ [10, 10, 10] }
         angle={0.15} penumbra={1} />
         <directionalLight position= {[-10, 10, 0]}
         intensity={1} />
         <OrbitControls enableZoom={false} enablePan={true} enableRotate={false} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI /2} />
         <Suspense fallback={null}>
               <Avatar/>
         </Suspense>
      </Canvas>
   );
}

