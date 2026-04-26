import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function WindowFrame() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.35, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.2, 0.05);
  });

  // Bronze-tinted UPVC frame material
  const frameMat = (
    <meshPhysicalMaterial
      color="#f4ede0"
      roughness={0.35}
      metalness={0.05}
      clearcoat={0.6}
      clearcoatRoughness={0.3}
    />
  );
  const glassMat = (
    <meshPhysicalMaterial
      color="#cfd8dc"
      roughness={0.05}
      metalness={0}
      transmission={0.92}
      thickness={0.4}
      ior={1.45}
      transparent
      opacity={0.55}
    />
  );
  const bronzeMat = <meshStandardMaterial color="#8a6a3d" roughness={0.3} metalness={0.85} />;

  // Frame dimensions
  const W = 2.4,
    H = 3.2,
    T = 0.18,
    D = 0.22;
  return (
    <group ref={group} position={[0, 0, 0]}>
      <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.4}>
        {/* Outer frame */}
        <mesh position={[0, H / 2 - T / 2, 0]}>
          <boxGeometry args={[W, T, D]} />
          {frameMat}
        </mesh>
        <mesh position={[0, -H / 2 + T / 2, 0]}>
          <boxGeometry args={[W, T, D]} />
          {frameMat}
        </mesh>
        <mesh position={[-W / 2 + T / 2, 0, 0]}>
          <boxGeometry args={[T, H, D]} />
          {frameMat}
        </mesh>
        <mesh position={[W / 2 - T / 2, 0, 0]}>
          <boxGeometry args={[T, H, D]} />
          {frameMat}
        </mesh>
        {/* Mullions */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[T * 0.7, H - T * 2, D]} />
          {frameMat}
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[W - T * 2, T * 0.7, D]} />
          {frameMat}
        </mesh>
        {/* Glass panes */}
        {[
          [-W / 4, H / 4],
          [W / 4, H / 4],
          [-W / 4, -H / 4],
          [W / 4, -H / 4],
        ].map(([x, y], i) => (
          <mesh key={i} position={[x, y, 0]}>
            <boxGeometry args={[W / 2 - T * 1.2, H / 2 - T * 1.2, D * 0.4]} />
            {glassMat}
          </mesh>
        ))}
        {/* Bronze handle */}
        <mesh position={[W / 2 - T - 0.15, 0, D / 2 + 0.02]}>
          <boxGeometry args={[0.06, 0.55, 0.08]} />
          {bronzeMat}
        </mesh>
        <mesh position={[W / 2 - T - 0.15, -0.3, D / 2 + 0.05]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.22, 16]} />
          {bronzeMat}
        </mesh>
      </Float>
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.2, 5.4], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#0a0a0a", 8, 14]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} castShadow color="#fff5e6" />
      <directionalLight position={[-4, 2, -3]} intensity={0.5} color="#a87a3d" />
      <Suspense fallback={null}>
        <WindowFrame />
        <Environment preset="apartment" />
        <ContactShadows position={[0, -1.7, 0]} opacity={0.5} blur={2.5} scale={6} />
      </Suspense>
    </Canvas>
  );
}
