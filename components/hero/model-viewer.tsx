"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

export default function ModelViewer() {
  return (
    <Canvas
      camera={{ position: [0, 2, 9], fov: 100 }}
      style={{ width: "100%", height: "100%" }}
      className="z-50"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Environment preset="sunset" />
      <Model />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}

function Model() {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/assets/3d_model/infinite_looper.glb");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (modelRef.current) {
      // Outer group rotation (subtle)
      modelRef.current.rotation.y += 0.002;

      // Inner ring spin (faster)
      const inner = modelRef.current.getObjectByName("InnerRing");
      if (inner) {
        inner.rotation.y += 0.03;
      }
    }
  });

  return (
    <primitive object={scene} ref={modelRef} scale={1.1} position={[0, 0, 0]} />
  );
}
