import { Canvas } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  ContactShadows,
} from '@react-three/drei'

import House from './House'

function HouseScene() {
  return (
    <Canvas
      camera={{
        position: [5.5, 3.5, 6.5],
        fov: 38,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
    >
      {/* General scene light */}
      <ambientLight intensity={0.8} />

      {/* Main directional light */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={2}
        castShadow
      />

      <House />

      <ContactShadows
        position={[0, -0.9, 0]}
        opacity={0.3}
        scale={10}
        blur={2.5}
        far={4}
      />

      <Environment preset="city" />

      <OrbitControls
        enablePan={false}
        enableZoom
        minDistance={5}
        maxDistance={10}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.05}
      />
    </Canvas>
  )
}

export default HouseScene