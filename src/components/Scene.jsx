import React from "react";
import { Canvas } from "@react-three/fiber";
import { View, OrthographicCamera, Preload } from "@react-three/drei";

export default function Scene() {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          backgroundColor: "white",
          // paddingBottom: "100lvh",
        }}
        eventSource={document.body}
      >
        <View.Port />
        <OrthographicCamera makeDefault position={[0, 0, 300]} zoom={1} />
        <Preload all />
      </Canvas>
    </>
  );
}
