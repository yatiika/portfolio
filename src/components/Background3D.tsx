import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function SemiconductorCore() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1 + 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Silicon Wafer Base */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[9, 9, 0.1, 64]} />
        <meshStandardMaterial color="#050810" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Wafer Edge glowing ring */}
      <mesh position={[0, -0.15, 0]}>
        <torusGeometry args={[9, 0.05, 64, 100]} />
        <meshStandardMaterial color="#aa8c2c" emissive="#aa8c2c" emissiveIntensity={0.2} metalness={1} roughness={0.3} />
      </mesh>

      {/* Circuit Grid on the Wafer */}
      <group position={[0, -0.14, 0]}>
        <gridHelper args={[16, 32, '#d4af37', '#1a1f2e']} />
      </group>

      {/* Central Floating Processor */}
      <Float speed={2} floatIntensity={0.5} rotationIntensity={0.2}>
        <group position={[0, 1.5, 0]}>
          <mesh>
            <boxGeometry args={[3.5, 0.3, 3.5]} />
            <meshStandardMaterial color="#020305" metalness={0.9} roughness={0.1} />
          </mesh>
          
          {/* Gold Die inside CPU */}
          <mesh position={[0, 0.16, 0]}>
            <boxGeometry args={[2, 0.02, 2]} />
            <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.6} metalness={1} roughness={0.2} />
          </mesh>
          <gridHelper args={[1.8, 10, '#ffffff', '#aa8c2c']} position={[0, 0.18, 0]} />

          {/* Connectors/Pins */}
          {Array.from({ length: 4 }).map((_, side) => {
            return Array.from({ length: 8 }).map((_, i) => {
              const offset = -1.4 + (i * 0.4);
              let pos: [number, number, number] = [0, 0, 0];
              if (side === 0) pos = [1.8, 0, offset];
              if (side === 1) pos = [-1.8, 0, offset];
              if (side === 2) pos = [offset, 0, 1.8];
              if (side === 3) pos = [offset, 0, -1.8];
              return (
                <mesh key={`${side}-${i}`} position={pos} rotation={[0, side > 1 ? Math.PI/2 : 0, 0]}>
                  <boxGeometry args={[0.3, 0.05, 0.1]} />
                  <meshStandardMaterial color="#aa8c2c" metalness={1} roughness={0.2} />
                </mesh>
              )
            })
          })}
        </group>
      </Float>

      {/* Data Packets along the grid */}
      <DataParticles />
    </group>
  );
}

function DataParticles() {
  const particlesRef = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    return Array.from({ length: 80 }).map(() => ({
      x: (Math.floor(Math.random() * 32) - 16) * 0.5,
      z: (Math.floor(Math.random() * 32) - 16) * 0.5,
      axis: Math.random() > 0.5 ? 'x' : 'z',
      speed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1)
    }));
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, i) => {
        const p = particles[i];
        if (p.axis === 'x') {
          p.x += p.speed;
          if (p.x > 8 || p.x < -8) p.speed *= -1;
        } else {
          p.z += p.speed;
          if (p.z > 8 || p.z < -8) p.speed *= -1;
        }
        
        // Hide if outside circular wafer area
        if (p.x * p.x + p.z * p.z > 64) {
             child.visible = false;
        } else {
             child.visible = true;
             child.position.set(p.x, 0, p.z);
        }
      });
    }
  });

  return (
    <group position={[0, -0.13, 0]} ref={particlesRef}>
      {particles.map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#d4af37" />
        </mesh>
      ))}
    </group>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-40 bg-[#03050a]">
      <Canvas camera={{ position: [0, 2, 10], fov: 55 }}>
        <fog attach="fog" args={['#03050a', 5, 20]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[0, 2, 0]} intensity={2} color="#aa8c2c" distance={10} />
        
        <SemiconductorCore />
        
        <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  );
}
