import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({
  position,
  color,
  speed,
  scale,
  geometry,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
  geometry: 'sphere' | 'octahedron' | 'icosahedron' | 'torus' | 'box' | 'cone';
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.15;
    }
  });

  const GeometryComponent = useMemo(() => {
    switch (geometry) {
      case 'sphere':
        return <sphereGeometry args={[1, 64, 64]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.4, 32, 64]} />;
      case 'box':
        return <boxGeometry args={[1.2, 1.2, 1.2]} />;
      case 'cone':
        return <coneGeometry args={[0.8, 1.5, 32]} />;
      default:
        return <sphereGeometry args={[1, 64, 64]} />;
    }
  }, [geometry]);

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {GeometryComponent}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.85}
          roughness={0.15}
          metalness={0.9}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 80;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 25;
      pos[i + 1] = (Math.random() - 0.5) * 25;
      pos[i + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#10b981"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <directionalLight position={[-10, -5, 5]} intensity={0.4} color="#10b981" />
      <pointLight position={[0, 0, 10]} intensity={0.3} color="#ffffff" />

      {/* Clean floating shapes - solid and crisp */}
      <FloatingShape
        position={[-5, 2.5, -4]}
        color="#10b981"
        speed={1.2}
        scale={1.1}
        geometry="sphere"
      />
      <FloatingShape
        position={[5, -1.5, -3]}
        color="#059669"
        speed={0.8}
        scale={0.9}
        geometry="octahedron"
      />
      <FloatingShape
        position={[-4, -2.5, -5]}
        color="#34d399"
        speed={1.5}
        scale={0.7}
        geometry="box"
      />
      <FloatingShape
        position={[4, 3, -6]}
        color="#6ee7b7"
        speed={1}
        scale={0.8}
        geometry="torus"
      />
      <FloatingShape
        position={[0, -3.5, -4]}
        color="#047857"
        speed={0.6}
        scale={0.6}
        geometry="cone"
      />
      <FloatingShape
        position={[-6, 0, -7]}
        color="#059669"
        speed={1.3}
        scale={0.9}
        geometry="icosahedron"
      />
      <FloatingShape
        position={[6, 1.5, -5]}
        color="#34d399"
        speed={0.9}
        scale={0.5}
        geometry="box"
      />
      <FloatingShape
        position={[2, 4, -8]}
        color="#10b981"
        speed={0.7}
        scale={0.6}
        geometry="sphere"
      />

      {/* Particle field */}
      <ParticleField />
    </>
  );
};

export const HeroBackground3D = () => {
  return (
    <div className="absolute inset-0 opacity-80">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[2, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
