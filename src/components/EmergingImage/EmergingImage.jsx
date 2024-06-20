import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";
import { View } from "@react-three/drei";
/* eslint-disable no-unused-vars */
import EmergeMaterial from "./EmergeMaterial";
import { useLayoutEffect } from "react";

import useScreenSize from "./useScreenSize";

const PIXELS = [
  0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13,
  0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3, 0.33,
  0.36, 0.39, 0.42, 0.45, 0.48, 0.51, 0.54, 0.57, 0.6, 0.64, 0.68, 0.72, 0.76,
  0.8, 0.85, 0.9, 0.95, 1.0,
];

const EmergingImage = ({ ...props }) => {
  const [texture, setTexture] = useState(null);
  const ref = useRef();
  const screenSize = useScreenSize();
  const [refMesh, setRefMesh] = useState(null);
  const [textureSize, setTextureSize] = useState([0, 0]);
  const [elementSize, setElementSize] = useState([0, 0]);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (props.url.match(/\.(mp4|webm|ogg)$/i)) {
      const video = document.createElement("video");
      video.src = props.url;
      video.crossOrigin = "anonymous";
      video.loop = true;
      video.muted = true;

      const handleLoadedData = () => {
        const videoTexture = new THREE.VideoTexture(video);
        console.log("Video texture loaded:", videoTexture);
        videoTexture.needsUpdate = true;
        setTextureSize([video.videoWidth, video.videoHeight]);
        setTexture(videoTexture);
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
      };
    } else {
      const loader = new THREE.TextureLoader();
      loader.load(
        props.url,
        (data) => {
          console.log("Texture loaded:", data);
          setTextureSize([data.source.data.width, data.source.data.height]);
          setTexture(data);
        },
        undefined,
        (error) => {
          console.error("Error loading texture:", error);
        },
      );
    }
  }, []);

  useEffect(() => {
    if (refMesh) {
      refMesh.material.uProgress = 0;
      refMesh.material.uType = props.type;
    }
  }, [props.type]);

  useGSAP(() => {
    if (refMesh?.material) {
      gsap.to(refMesh.material, {
        uProgress: isIntersecting ? 1 : 0,
        duration: 2,
        ease: "rough",
      });
    }
  }, [isIntersecting, props.type]);

  // scroll check
  useLayoutEffect(() => {
    if (refMesh) {
      let bounds = ref.current.getBoundingClientRect();
      setElementSize([bounds.width, bounds.height]);
      refMesh?.scale.set(bounds.width, bounds.height, 1);
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      });
      observer.observe(ref.current);
    }
  }, [refMesh]);

  // resize
  useEffect(() => {
    let bounds = ref.current.getBoundingClientRect();
    setElementSize([bounds.width, bounds.height]);
    refMesh?.scale.set(bounds.width, bounds.height, 1);
  }, [screenSize]);

  /* eslint-disable react/no-unknown-property */
  return (
    <View {...props} ref={ref}>
      <mesh ref={setRefMesh}>
        <emergeMaterial
          uFillColor={new THREE.Color("black")}
          transparent={true}
          uTexture={texture}
          uPixels={PIXELS}
          uTextureSize={new THREE.Vector2(textureSize[0], textureSize[1])}
          uElementSize={new THREE.Vector2(elementSize[0], elementSize[1])}
        />
        <planeGeometry args={[1, 1]} />
      </mesh>
    </View>
  );
};

export default EmergingImage;
