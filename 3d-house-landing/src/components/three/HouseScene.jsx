import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  OrbitControls,
} from '@react-three/drei'

import House from './House'

function HouseScene({ selectedPart, onSelect }) {
  return (
    <Canvas
      shadows
      camera={{
        position: [5.2, 3.2, 5.8],
        fov: 34,
        near: 0.1,
        far: 100,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
    >
      {/* Soft overall illumination */}
      <ambientLight intensity={0.65} />

      {/* Main architectural light */}
      <directionalLight
        position={[5, 8, 6]}
        intensity={2.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={25}
        shadow-bias={-0.0001}
      />

      {/* Softer fill light */}
      <directionalLight
        position={[-4, 3, -3]}
        intensity={0.45}
      />

      {/* Existing interactive house */}
      <House
        selectedPart={selectedPart}
        onSelect={onSelect}
      />

      {/* Ground contact */}
      <ContactShadows
        position={[0, -0.91, 0]}
        opacity={0.28}
        scale={10}
        blur={2.8}
        far={4}
      />

      {/* Neutral environment reflections */}
      <Environment preset="city" />

      {/* User interaction */}
      <OrbitControls
        makeDefault
        enablePan={false}
        enableRotate
        enableZoom
        minDistance={4.5}
        maxDistance={9}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.05}
        target={[0, 0.9, 0]}
        rotateSpeed={0.65}
        zoomSpeed={0.7}
        dampingFactor={0.06}
        enableDamping
      />
    </Canvas>
  )
}

export default HouseScene