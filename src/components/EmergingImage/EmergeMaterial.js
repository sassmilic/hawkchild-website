import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
const EmergeMaterial = shaderMaterial(
  {
    uFillColor: new THREE.Color("#f60"),
    uProgress: 0,
    uPixels: null,
    uType: 0,
    uTexture: null,
    uTextureSize: null,
    uElementSize: null,
  },
  // vertex shader
  /*glsl*/ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
  // fragment shader
  /*glsl*/ `
      uniform vec3 uFillColor;
      uniform float uProgress;
      uniform float uType;
      uniform float uPixels[36];
      uniform vec2 uTextureSize;
      uniform vec2 uElementSize;
      uniform sampler2D uTexture;
      varying vec2 vUv;

      void main() {
        //  texture cover
        vec2 uv = vUv - vec2(0.5);
        uv += vec2(0.5);
        float imageAspect = uTextureSize.x/uTextureSize.y;

        // pixelize
        int indexProgress = int(uProgress*36.);
        float pixellation = floor(uElementSize.x*uPixels[indexProgress]);

        vec2 gridSize = vec2(
          pixellation, 
          floor(pixellation/imageAspect)
        );
        vec2 newUV = floor(uv * gridSize) / gridSize + 0.5/vec2(gridSize);
        vec4 color = texture2D(uTexture, newUV);
        gl_FragColor = color;

        gl_FragColor.rgb = pow(gl_FragColor.rgb,vec3(1./2.2));
      }
    `,
);

// declaratively
extend({ EmergeMaterial });

export default EmergeMaterial;
