import { useState } from 'react'

function InteractivePart({
  id,
  selectedPart,
  onSelect,
  children,
}) {
  const [hovered, setHovered] = useState(false)

  const active = selectedPart === id

  return (
    <group
      scale={active ? 1.025 : hovered ? 1.012 : 1}
      onPointerEnter={(event) => {
        event.stopPropagation()
        setHovered(true)
        document.body.style.cursor = 'pointer'
      }}
      onPointerLeave={() => {
        setHovered(false)
        document.body.style.cursor = 'default'
      }}
      onClick={(event) => {
        event.stopPropagation()
        onSelect?.(id)
      }}
    >
      {children}
    </group>
  )
}


/* =========================
   TIMBER FRAME
========================= */

function TimberFrame({ selectedPart, onSelect }) {
  const studs = []

  for (let x = -1.6; x <= 1.6; x += 0.4) {
    studs.push(
      <mesh
        key={`front-${x}`}
        castShadow
        position={[x, 1.05, 1.46]}
      >
        <boxGeometry args={[0.09, 2.1, 0.09]} />
        <meshStandardMaterial
          color="#b68a5a"
          roughness={0.85}
        />
      </mesh>
    )
  }

  const sideStuds = []

  for (let z = -1.2; z <= 1.2; z += 0.4) {
    sideStuds.push(
      <mesh
        key={`side-${z}`}
        castShadow
        position={[1.76, 1.05, z]}
      >
        <boxGeometry args={[0.09, 2.1, 0.09]} />
        <meshStandardMaterial
          color="#b68a5a"
          roughness={0.85}
        />
      </mesh>
    )
  }

  return (
    <InteractivePart
      id="frame"
      selectedPart={selectedPart}
      onSelect={onSelect}
    >
      {/* Front studs */}
      {studs}

      {/* Side studs */}
      {sideStuds}

      {/* Bottom plates */}
      <mesh
        castShadow
        position={[0, 0.05, 1.46]}
      >
        <boxGeometry args={[3.6, 0.12, 0.1]} />
        <meshStandardMaterial color="#a97849" />
      </mesh>

      <mesh
        castShadow
        position={[1.76, 0.05, 0]}
      >
        <boxGeometry args={[0.1, 0.12, 3]} />
        <meshStandardMaterial color="#a97849" />
      </mesh>

      {/* Top plates */}
      <mesh
        castShadow
        position={[0, 2.05, 1.46]}
      >
        <boxGeometry args={[3.6, 0.12, 0.1]} />
        <meshStandardMaterial color="#a97849" />
      </mesh>

      <mesh
        castShadow
        position={[1.76, 2.05, 0]}
      >
        <boxGeometry args={[0.1, 0.12, 3]} />
        <meshStandardMaterial color="#a97849" />
      </mesh>
    </InteractivePart>
  )
}


/* =========================
   HOUSE
========================= */

function House({ selectedPart, onSelect }) {
  return (
    <group
      position={[0, -0.8, 0]}
      scale={1.12}
    >

      {/* =====================
          FOUNDATION
      ====================== */}

      <InteractivePart
        id="foundation"
        selectedPart={selectedPart}
        onSelect={onSelect}
      >
        <mesh
          receiveShadow
          castShadow
          position={[0, -0.08, 0]}
        >
          <boxGeometry args={[4.1, 0.18, 3.5]} />

          <meshStandardMaterial
            color="#aaa49a"
            roughness={0.95}
          />
        </mesh>
      </InteractivePart>


      {/* =====================
          REAR SOLID WALL
      ====================== */}

      <InteractivePart
        id="walls"
        selectedPart={selectedPart}
        onSelect={onSelect}
      >
        <mesh
          castShadow
          receiveShadow
          position={[-1.76, 1.05, 0]}
        >
          <boxGeometry args={[0.12, 2.1, 3]} />

          <meshStandardMaterial
            color="#d8d1c5"
            roughness={0.9}
          />
        </mesh>

        <mesh
          castShadow
          receiveShadow
          position={[0, 1.05, -1.46]}
        >
          <boxGeometry args={[3.6, 2.1, 0.12]} />

          <meshStandardMaterial
            color="#ded8ce"
            roughness={0.9}
          />
        </mesh>
      </InteractivePart>


      {/* =====================
          EXPOSED TIMBER FRAME
      ====================== */}

      <TimberFrame
        selectedPart={selectedPart}
        onSelect={onSelect}
      />


      {/* =====================
          INSULATION
      ====================== */}

      <InteractivePart
        id="insulation"
        selectedPart={selectedPart}
        onSelect={onSelect}
      >
        {/* Front insulation bays */}

        <mesh
          position={[-1.4, 1.05, 1.43]}
        >
          <boxGeometry args={[0.27, 1.75, 0.055]} />

          <meshStandardMaterial
            color="#d7a94c"
            roughness={1}
          />
        </mesh>

        <mesh
          position={[-1.0, 1.05, 1.43]}
        >
          <boxGeometry args={[0.27, 1.75, 0.055]} />

          <meshStandardMaterial
            color="#d7a94c"
            roughness={1}
          />
        </mesh>

        <mesh
          position={[-0.6, 1.05, 1.43]}
        >
          <boxGeometry args={[0.27, 1.75, 0.055]} />

          <meshStandardMaterial
            color="#d7a94c"
            roughness={1}
          />
        </mesh>


        {/* Right-side insulation */}

        <mesh
          position={[1.73, 1.05, -0.8]}
        >
          <boxGeometry args={[0.055, 1.75, 0.27]} />

          <meshStandardMaterial
            color="#d7a94c"
            roughness={1}
          />
        </mesh>

        <mesh
          position={[1.73, 1.05, -0.4]}
        >
          <boxGeometry args={[0.055, 1.75, 0.27]} />

          <meshStandardMaterial
            color="#d7a94c"
            roughness={1}
          />
        </mesh>
      </InteractivePart>


      {/* =====================
          PARTIAL PLASTER WALL
      ====================== */}

      <InteractivePart
        id="plaster"
        selectedPart={selectedPart}
        onSelect={onSelect}
      >
        <mesh
          castShadow
          position={[0.9, 1.05, 1.51]}
        >
          <boxGeometry args={[1.35, 2.05, 0.07]} />

          <meshStandardMaterial
            color="#eeeae1"
            roughness={0.88}
          />
        </mesh>
      </InteractivePart>


      {/* =====================
          PARTIAL CLADDING
      ====================== */}

      <InteractivePart
        id="cladding"
        selectedPart={selectedPart}
        onSelect={onSelect}
      >
        <mesh
          castShadow
          position={[-1.82, 1.05, -0.65]}
        >
          <boxGeometry args={[0.08, 2.05, 1.55]} />

          <meshStandardMaterial
            color="#917160"
            roughness={0.82}
          />
        </mesh>
      </InteractivePart>


      {/* =====================
          FRONT DOOR
      ====================== */}

      <mesh
        castShadow
        position={[1.12, 0.72, 1.56]}
      >
        <boxGeometry args={[0.55, 1.45, 0.08]} />

        <meshStandardMaterial
          color="#4b362e"
          roughness={0.8}
        />
      </mesh>


      {/* =====================
          WINDOW
      ====================== */}

      <mesh
        position={[0.35, 1.25, 1.565]}
      >
        <boxGeometry args={[0.7, 0.7, 0.06]} />

        <meshStandardMaterial
          color="#a9c2c5"
          roughness={0.2}
          metalness={0.05}
        />
      </mesh>


      {/* =====================
          ROOF
      ====================== */}

      <InteractivePart
        id="roof"
        selectedPart={selectedPart}
        onSelect={onSelect}
      >
        <mesh
          castShadow
          position={[0, 2.5, 0]}
          rotation={[0, Math.PI / 4, 0]}
        >
          <coneGeometry args={[3.1, 1.7, 4]} />

          <meshStandardMaterial
            color="#353330"
            roughness={0.8}
          />
        </mesh>
      </InteractivePart>

    </group>
  )
}

export default House