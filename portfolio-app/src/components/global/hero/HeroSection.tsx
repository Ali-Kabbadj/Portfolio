'use client'

import Scene from "~/components/global/renderer/Scene";

export const HeroSection = () => {
  return (
    // this div should not be full width or hight but shoud addabte to the screen width and height and display the 3d view in the center and shoudl adabte to veew port size
    <div className="w-full h-screen">
        <Scene />
    </div>
  );
};