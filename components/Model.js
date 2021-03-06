import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const { Timer } = require("timer-node");
  const timer = new Timer({ label: "test-timer" });

  timer.start();

  let spinSlow = () => (group.current.rotation.y += 0.3);
  let spinFast = () => (group.current.rotation.y += 0.005);
  useFrame(() => {
    if (timer.ms() < 200) {
      spinSlow();
    } else {
      spinFast();
    }
  });

  const group = useRef();
  const { nodes, materials } = useGLTF("/model.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.new002.geometry}
        material={materials["palette.003"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.23}
        position-y={-2.5}
      />
    </group>
  );
}

useGLTF.preload("/model.gltf");
