import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

const VoxelArt = () => {
  return (
    <Canvas camera={{ position: [-20, 2, 5], fov: 20 }}>
      <OrbitControls enableZoom={true} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 3, 2]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default VoxelArt;
