"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// 5x7 pixel font for uppercase letters
const PIXEL_FONT: Record<string, number[][]> = {
  V: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  O: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  X: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ],
  E: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  L: [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
};

function VoxelLetter({
  letter,
  offset,
  color,
}: {
  letter: string;
  offset: number;
  color: string;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.2 + offset * 0.8) * 0.15;
  });

  const grid = PIXEL_FONT[letter];
  if (!grid) return null;

  return (
    <group ref={groupRef} position={[offset * 6, 0, 0]}>
      {grid.map((row, y) =>
        row.map((cell, x) =>
          cell ? (
            <mesh key={`${y}-${x}`} position={[x, (6 - y) * 1, 0]} scale={0.9}>
              <boxGeometry args={[0.95, 0.95, 0.95]} />
              <meshStandardMaterial color={color} roughness={0.25} metalness={0.15} />
            </mesh>
          ) : null
        )
      )}
    </group>
  );
}

export default function VoxelText({
  text = "VOXEL",
  color = "#6366f1",
  className = "",
}: {
  text?: string;
  color?: string;
  className?: string;
}) {
  const letters = useMemo(() => text.toUpperCase().split(""), [text]);

  return (
    <div className={`w-full h-24 ${className}`}>
      <Canvas
        camera={{ position: [12, 4, 15], fov: 45 }}
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={1} />
        <pointLight position={[-5, 3, 5]} intensity={0.4} color="#818cf8" />
        <group position={[-(letters.length * 6) / 2 + 2.5, -3, 0]}>
          {letters.map((letter, i) => (
            <VoxelLetter key={i} letter={letter} offset={i} color={color} />
          ))}
        </group>
      </Canvas>
    </div>
  );
}
