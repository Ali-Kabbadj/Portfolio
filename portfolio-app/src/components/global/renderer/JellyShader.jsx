// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

export const JellyShaderMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.2, 0.5, 0.8),
    hovered: false,
    mousePosition: new THREE.Vector2(0, 0),
    resolution: new THREE.Vector2(1, 1),
  },
  // Vertex Shader
  `
    uniform float time;
    uniform bool hovered;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec3 vWorldPosition;

    // Simple noise function
    float noise(vec3 p) {
      return fract(sin(dot(p, vec3(12.9898, 78.233, 45.5432))) * 43758.5453);
    }

    void main() {
      vUv = uv;
      vNormal = normal;
      vPosition = position;
      
      // Subtle wobble effect
      float wobbleIntensity = hovered ? 0.03 : 0.01;
      vec3 wobble = normal * noise(position * 5.0 + time) * wobbleIntensity;
      
      vec3 finalPosition = position + wobble;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPosition, 1.0);
      vWorldPosition = (modelMatrix * vec4(finalPosition, 1.0)).xyz;
    }
  `,
  // Fragment Shader
  `
    uniform vec3 color;
    uniform bool hovered;
    uniform float time;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec3 vWorldPosition;

    // Fresnel function
    float fresnel(vec3 viewDirection, vec3 worldNormal) {
      return pow(1.0 + dot(viewDirection, worldNormal), 3.0);
    }

    void main() {
      vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
      
      // Enhanced fresnel effect
      float fresnelTerm = fresnel(viewDirection, vNormal);
      
      // Water-like refraction
      vec3 refraction = refract(-viewDirection, vNormal, 0.8);
      vec2 refractionUv = vUv + refraction.xy * 0.1;
      
      // Watery caustics effect
      float caustics = 0.5 + 0.5 * sin(refractionUv.x * 10.0 + time) * sin(refractionUv.y * 10.0 + time);
      
      // Combine colors for a watery effect
      vec3 waterColor = mix(color, vec3(1.0), 0.8); // Mostly transparent with a hint of color
      vec3 finalColor = mix(waterColor, vec3(1.0), fresnelTerm * 0.5);
      
      // Add subtle caustics
      finalColor += vec3(caustics * 0.05);

      // Mica-like sparkle effect
      float sparkle = pow(fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453), 20.0) * 0.5;
      finalColor += vec3(sparkle);

      // High transparency with slight color
      float alpha = mix(0.1, 0.3, fresnelTerm);
      alpha = hovered ? alpha * 1.5 : alpha;

      gl_FragColor = vec4(finalColor, alpha);
    }
  `
)