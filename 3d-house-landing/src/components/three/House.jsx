import { useState } from 'react'

function InteractivePart({
  name,
  selectedPart,
  onSelect,
  children,
  ...props
}) {
  const [hovered, setHovered] = useState(false)

  const selected = selectedPart === name

  const handlePointerEnter = (event) => {
    event.stopPropagation()

    setHovered(true)
    document.body.style.cursor = 'pointer'
  }

  const handlePointerLeave = () => {
    setHovered(false)
    document.body.style.cursor = 'default'
  }

  const handleClick = (event) => {
    event.stopPropagation()
    onSelect(name)
  }

  return (
    <mesh
      {...props}
      castShadow
      receiveShadow
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
      scale={selected ? 1.04 : hovered ? 1.025 : 1}
    >
      {children}
    </mesh>
  )
}

function House({ selectedPart, onSelect }) {
  return (
    <group position={[0, -0.8, 0]}>
      {/* WALLS */}

      <InteractivePart
        name="walls"
        selectedPart={selectedPart}
        onSelect={onSelect}
        position={[0, 1, 0]}
      >
        <boxGeometry args={[3.6, 2, 3]} />

        <meshStandardMaterial
          color={
            selectedPart === 'walls'
              ? '#b9aa94'
              : '#d8d1c5'
          }
          roughness={0.8}
        />
      </InteractivePart>

      {/* ROOF */}

      <InteractivePart
        name="roof"
        selectedPart={selectedPart}
        onSelect={onSelect}
        position={[0, 2.45, 0]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <coneGeometry args={[3.1, 1.8, 4]} />

        <meshStandardMaterial
          color={
            selectedPart === 'roof'
              ? '#71685e'
              : '#4d4943'
          }
          roughness={0.75}
        />
      </InteractivePart>

      {/* DOOR */}

      <InteractivePart
        name="door"
        selectedPart={selectedPart}
        onSelect={onSelect}
        position={[0, 0.65, 1.515]}
      >
        <boxGeometry args={[0.75, 1.55, 0.08]} />

        <meshStandardMaterial
          color={
            selectedPart === 'door'
              ? '#a18c75'
              : '#776b5e'
          }
        />
      </InteractivePart>

      {/* LEFT WINDOW */}

      <InteractivePart
        name="windows"
        selectedPart={selectedPart}
        onSelect={onSelect}
        position={[-1.15, 1.25, 1.525]}
      >
        <boxGeometry args={[0.8, 0.75, 0.06]} />

        <meshStandardMaterial
          color={
            selectedPart === 'windows'
              ? '#d7ecee'
              : '#b9d3d6'
          }
          roughness={0.25}
          metalness={0.05}
        />
      </InteractivePart>

      {/* RIGHT WINDOW */}

      <InteractivePart
        name="windows"
        selectedPart={selectedPart}
        onSelect={onSelect}
        position={[1.15, 1.25, 1.525]}
      >
        <boxGeometry args={[0.8, 0.75, 0.06]} />

        <meshStandardMaterial
          color={
            selectedPart === 'windows'
              ? '#d7ecee'
              : '#b9d3d6'
          }
          roughness={0.25}
          metalness={0.05}
        />
      </InteractivePart>

      {/* FOUNDATION */}

      <InteractivePart
        name="foundation"
        selectedPart={selectedPart}
        onSelect={onSelect}
        position={[0, -0.08, 0]}
      >
        <boxGeometry args={[4.1, 0.18, 3.5]} />

        <meshStandardMaterial
          color={
            selectedPart === 'foundation'
              ? '#8f887e'
              : '#aaa49a'
          }
          roughness={0.95}
        />
      </InteractivePart>
    </group>
  )
}

export default House