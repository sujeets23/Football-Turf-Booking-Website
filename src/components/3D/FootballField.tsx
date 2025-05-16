
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const fieldGeometry = new THREE.BoxGeometry(10, 0.5, 15);
const fieldMaterial = new THREE.MeshStandardMaterial({ 
  color: '#10b981',
  roughness: 0.8,
  metalness: 0.2
});

const lineMaterial = new THREE.MeshStandardMaterial({ 
  color: '#ffffff',
  emissive: '#ffffff',
  emissiveIntensity: 0.2
});

const FootballFieldModel = (props: any) => {
  const ref = useRef<THREE.Group>(null);

  // Rotate slowly
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
    }
  });

  return (
    <group ref={ref} {...props}>
      {/* Main field */}
      <mesh receiveShadow castShadow geometry={fieldGeometry} material={fieldMaterial} />
      
      {/* Field lines */}
      {/* Center line */}
      <mesh position={[0, 0.26, 0]} receiveShadow>
        <boxGeometry args={[10, 0.03, 0.1]} />
        <meshStandardMaterial {...lineMaterial} />
      </mesh>
      
      {/* Center circle */}
      <mesh position={[0, 0.26, 0]} receiveShadow>
        <ringGeometry args={[1.5, 1.6, 32]} />
        <meshStandardMaterial {...lineMaterial} />
      </mesh>
      
      {/* Goal areas */}
      <mesh position={[0, 0.26, -6]} receiveShadow>
        <boxGeometry args={[6, 0.03, 0.1]} />
        <meshStandardMaterial {...lineMaterial} />
      </mesh>
      
      <mesh position={[0, 0.26, 6]} receiveShadow>
        <boxGeometry args={[6, 0.03, 0.1]} />
        <meshStandardMaterial {...lineMaterial} />
      </mesh>
      
      {/* Perimeter */}
      <mesh position={[0, 0.26, 7.5]} receiveShadow>
        <boxGeometry args={[10, 0.03, 0.1]} />
        <meshStandardMaterial {...lineMaterial} />
      </mesh>
      
      <mesh position={[0, 0.26, -7.5]} receiveShadow>
        <boxGeometry args={[10, 0.03, 0.1]} />
        <meshStandardMaterial {...lineMaterial} />
      </mesh>
      
      <mesh position={[5, 0.26, 0]} receiveShadow>
        <boxGeometry args={[0.1, 0.03, 15]} />
        <meshStandardMaterial {...lineMaterial} />
      </mesh>
      
      <mesh position={[-5, 0.26, 0]} receiveShadow>
        <boxGeometry args={[0.1, 0.03, 15]} />
        <meshStandardMaterial {...lineMaterial} />
      </mesh>
      
      {/* Goals */}
      <mesh position={[0, 0.5, -7.7]} receiveShadow castShadow>
        <boxGeometry args={[3, 1, 0.1]} />
        <meshStandardMaterial color="#ffffff" opacity={0.7} transparent />
      </mesh>
      
      <mesh position={[0, 0.5, 7.7]} receiveShadow castShadow>
        <boxGeometry args={[3, 1, 0.1]} />
        <meshStandardMaterial color="#ffffff" opacity={0.7} transparent />
      </mesh>
    </group>
  );
};

const Ball = (props: any) => {
  const ref = useRef<THREE.Mesh>(null);
  
  // Animate ball floating
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
      ref.current.rotation.x = clock.getElapsedTime();
      ref.current.rotation.z = clock.getElapsedTime() * 0.5;
    }
  });
  
  return (
    <mesh ref={ref} {...props} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#ffffff" roughness={0.4} metalness={0.2} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <group>
      <FootballFieldModel position={[0, -1, -10]} />
      <Ball position={[0, 1, -10]} />
      <Environment preset="city" />
    </group>
  );
};

const FootballField = () => {
  return (
    <div className="three-canvas">
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 60 }}>
        <fog attach="fog" args={['#000', 5, 30]} />
        <ambientLight intensity={0.2} />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={0.8} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <Scene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2 - 0.1}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default FootballField;
