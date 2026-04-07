"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

// Single voxel block with hover effect
function Voxel({
  position,
  color,
  scale = 1,
  delay = 0,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  delay?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const startTime = useRef(delay);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime - startTime.current;
    if (t < 0) {
      meshRef.current.scale.setScalar(0);
      return;
    }
    const entrance = Math.min(t * 3, 1);
    const targetScale = hovered ? scale * 1.15 : scale;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale * entrance, targetScale * entrance, targetScale * entrance),
      0.1
    );
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0] * 0.5) * 0.05;
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[0.95, 0.95, 0.95]} />
      <meshStandardMaterial
        color={hovered ? "#ffffff" : color}
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  );
}

// Voxel logo/icon builder
function VoxelStructure({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = rotation[1] + state.clock.elapsedTime * 0.15;
  });

  // Rocket shape using voxels
  const voxels = useMemo(() => {
    const blocks: { pos: [number, number, number]; color: string; delay: number }[] = [];
    const palette = {
      body: "#6366f1",
      accent: "#818cf8",
      tip: "#f43f5e",
      window: "#38bdf8",
      flame: "#f97316",
      flameInner: "#fbbf24",
    };

    // Rocket body
    for (let y = 0; y < 6; y++) {
      for (let x = -1; x <= 1; x++) {
        for (let z = -1; z <= 1; z++) {
          if (Math.abs(x) + Math.abs(z) <= 1) {
            blocks.push({
              pos: [x, y, z],
              color: y === 3 && x === 0 && z === 1 ? palette.window : palette.body,
              delay: y * 0.08,
            });
          }
        }
      }
    }
    // Nose cone
    blocks.push({ pos: [0, 6, 0], color: palette.tip, delay: 0.5 });
    blocks.push({ pos: [0, 7, 0], color: palette.tip, delay: 0.55 });

    // Fins
    for (const xDir of [-1, 1]) {
      blocks.push({ pos: [xDir * 2, 0, 0], color: palette.accent, delay: 0.6 });
      blocks.push({ pos: [xDir * 2, 1, 0], color: palette.accent, delay: 0.65 });
    }
    blocks.push({ pos: [0, 0, 2], color: palette.accent, delay: 0.6 });
    blocks.push({ pos: [0, 1, 2], color: palette.accent, delay: 0.65 });

    // Flames
    for (const [x, z] of [
      [0, 0],
      [-1, 0],
      [1, 0],
      [0, -1],
    ]) {
      blocks.push({ pos: [x, -1, z], color: palette.flame, delay: 0.7 });
    }
    blocks.push({ pos: [0, -2, 0], color: palette.flameInner, delay: 0.75 });

    return blocks;
  }, []);

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {voxels.map((v, i) => (
        <Voxel key={i} position={v.pos} color={v.color} delay={v.delay} />
      ))}
    </group>
  );
}

// Floating particles around the scene
function VoxelParticles({ count = 40 }: { count?: number }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 3,
      ] as [number, number, number],
      color: ["#6366f1", "#818cf8", "#38bdf8", "#f43f5e", "#f97316"][
        Math.floor(Math.random() * 5)
      ],
      scale: 0.15 + Math.random() * 0.25,
      speed: 0.3 + Math.random() * 0.7,
      delay: i * 0.05,
    }));
  }, [count]);

  return (
    <>
      {particles.map((p, i) => (
        <Float key={i} speed={p.speed} rotationIntensity={0.5} floatIntensity={1.5}>
          <mesh position={p.position}>
            <boxGeometry args={[p.scale, p.scale, p.scale]} />
            <meshStandardMaterial
              color={p.color}
              roughness={0.5}
              metalness={0.2}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

// Voxel ground platform
function VoxelPlatform() {
  const blocks = useMemo(() => {
    const result: { pos: [number, number, number]; color: string; delay: number }[] = [];
    const size = 5;
    for (let x = -size; x <= size; x++) {
      for (let z = -size; z <= size; z++) {
        const dist = Math.sqrt(x * x + z * z);
        if (dist <= size) {
          const shade = dist < 2 ? "#4f46e5" : dist < 4 ? "#6366f1" : "#818cf8";
          result.push({
            pos: [x, -4, z],
            color: shade,
            delay: dist * 0.05,
          });
        }
      }
    }
    return result;
  }, []);

  return (
    <>
      {blocks.map((b, i) => (
        <Voxel key={i} position={b.pos} color={b.color} scale={1} delay={b.delay} />
      ))}
    </>
  );
}

export default function VoxelScene({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [8, 6, 10], fov: 45 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 15, 10]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#818cf8" />
        <pointLight position={[5, -3, 5]} intensity={0.3} color="#f97316" />

        <VoxelStructure position={[0, 0, 0]} />
        <VoxelPlatform />
        <VoxelParticles count={35} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
