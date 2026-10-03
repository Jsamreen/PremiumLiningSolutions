function House() {
  return (
    <group position={[0, -0.8, 0]}>
      {/* Main structure */}
      <mesh castShadow receiveShadow position={[0, 1, 0]}>
        <boxGeometry args={[3.6, 2, 3]} />
        <meshStandardMaterial color="#d8d1c5" roughness={0.8} />
      </mesh>

      {/* Roof */}
      <mesh
        castShadow
        position={[0, 2.45, 0]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <coneGeometry args={[3.1, 1.8, 4]} />
        <meshStandardMaterial color="#4d4943" roughness={0.75} />
      </mesh>

      {/* Door */}
      <mesh castShadow position={[0, 0.65, 1.515]}>
        <boxGeometry args={[0.75, 1.55, 0.08]} />
        <meshStandardMaterial color="#776b5e" />
      </mesh>

      {/* Left window */}
      <mesh position={[-1.15, 1.25, 1.525]}>
        <boxGeometry args={[0.8, 0.75, 0.06]} />
        <meshStandardMaterial
          color="#b9d3d6"
          roughness={0.25}
          metalness={0.05}
        />
      </mesh>

      {/* Right window */}
      <mesh position={[1.15, 1.25, 1.525]}>
        <boxGeometry args={[0.8, 0.75, 0.06]} />
        <meshStandardMaterial
          color="#b9d3d6"
          roughness={0.25}
          metalness={0.05}
        />
      </mesh>

      {/* Foundation */}
      <mesh receiveShadow position={[0, -0.08, 0]}>
        <boxGeometry args={[4.1, 0.18, 3.5]} />
        <meshStandardMaterial color="#aaa49a" roughness={0.95} />
      </mesh>
    </group>
  )
}

export default House