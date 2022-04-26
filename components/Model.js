/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  useFrame(() => {
    group.current.rotation.y += 0.005;
  });
  const group = useRef();
  const { nodes, materials } = useGLTF("/model.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.aloysiusnew.geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.2}
        position-y={-2.5}
      />
    </group>
  );
}

useGLTF.preload("/model.gltf");
