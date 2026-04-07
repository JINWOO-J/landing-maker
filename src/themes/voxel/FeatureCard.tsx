"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SHAPES = ["cube", "diamond", "tower", "star"] as const;
type Shape = (typeof SHAPES)[number];

function MiniVoxelIcon({
  shape,
  color,
}: {
  shape: Shape;
  color: string;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });

  const voxels = useMemo(() => {
    const blocks: [number, number, number][] = [];

    switch (shape) {
      case "cube":
        for (let x = -1; x <= 1; x++)
          for (let y = -1; y <= 1; y++)
            for (let z = -1; z <= 1; z++)
              if (Math.abs(x) + Math.abs(y) + Math.abs(z) >= 2) blocks.push([x, y, z]);
        break;
      case "diamond":
        for (let x = -2; x <= 2; x++)
          for (let y = -2; y <= 2; y++)
            for (let z = -2; z <= 2; z++)
              if (Math.abs(x) + Math.abs(y) + Math.abs(z) <= 2) blocks.push([x, y, z]);
        break;
      case "tower":
        for (let y = 0; y < 5; y++) {
          const w = y < 3 ? 1 : 0;
          for (let x = -w; x <= w; x++)
            for (let z = -w; z <= w; z++) blocks.push([x, y - 2, z]);
        }
        break;
      case "star":
        blocks.push([0, 0, 0]);
        for (const dir of [
          [1, 0, 0],
          [-1, 0, 0],
          [0, 1, 0],
          [0, -1, 0],
          [0, 0, 1],
          [0, 0, -1],
        ]) {
          blocks.push(dir as [number, number, number]);
          blocks.push(dir.map((d) => d * 2) as [number, number, number]);
        }
        break;
    }

    return blocks;
  }, [shape]);

  return (
    <group ref={groupRef}>
      {voxels.map((pos, i) => (
        <mesh key={i} position={pos} scale={0.9}>
          <boxGeometry args={[0.95, 0.95, 0.95]} />
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.15} />
        </mesh>
      ))}
    </group>
  );
}

export default function VoxelFeatureCard({
  title,
  description,
  color,
  accentColor,
  index,
}: {
  title: string;
  description: string;
  color: string;
  accentColor: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const shape = SHAPES[index % 4];

  return (
    <div
      className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 ${
        hovered ? "border-white/20 bg-white/10 scale-[1.02]" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-32 mb-4 rounded-xl overflow-hidden" style={{ background: `${accentColor}10` }}>
        <Canvas camera={{ position: [4, 3, 4], fov: 40 }} gl={{ alpha: true }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-3, 2, -3]} intensity={0.4} color={accentColor} />
          <MiniVoxelIcon shape={shape} color={color} />
        </Canvas>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
