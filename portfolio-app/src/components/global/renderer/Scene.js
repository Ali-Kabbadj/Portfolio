'use client'
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {Model} from './Avatar_extra';


export default function Scene() {
   return (
      <Canvas
         camera={{ position: [0, 3, 3], fov: 30 }}
         style={{
            backgroundColor: 'transparent',
            width: '100vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={7} />
         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
         <directionalLight position={[10, 10, 10]} intensity={1} />
         <OrbitControls enableZoom={false} maxPolarAngle={Math.PI /2}/>
         <Suspense fallback={null}>
            <group position-y={-1}>
               <Model />
            </group>
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
}