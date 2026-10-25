import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'

// Progression du scroll normalisée 0 -> 1 sur la première hauteur d'écran
const scrollProgress = () => Math.min(window.scrollY / window.innerHeight, 1)

// Personnage 3D : danse, suit le curseur du regard/torse, réagit au scroll
function Avatar() {
  const group = useRef()
  const inner = useRef()
  const { scene, animations } = useGLTF('/avatar.glb')
  const { actions, names } = useAnimations(animations, inner)

  useEffect(() => {
    // Priorité à la danse, sinon première animation disponible
    const clip =
      names.find((n) => n === 'SambaDance' || n === 'Dance') ??
      names.find((n) => n !== 'TPose') ??
      names[0]
    const action = actions[clip]
    if (action) {
      action.reset().fadeIn(0.5).play()
      action.timeScale = 1.0
    }
    return () => action?.fadeOut(0.3)
  }, [actions, names])

  useFrame((state) => {
    const p = scrollProgress()
    const t = state.clock.elapsedTime
    const { x, y } = state.pointer

    if (group.current) {
      // Le personnage pivote doucement vers le curseur + tour de piste au scroll
      const targetY = x * 0.5 + p * Math.PI * 2
      const targetX = -y * 0.15
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.06
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.06

      // Il descend légèrement et s'éloigne quand on scrolle
      group.current.position.y = -1.55 + Math.sin(t * 1.2) * 0.04 - p * 1.2
      group.current.position.x = p * 1.5
      const s = 1.7 - p * 0.25
      group.current.scale.setScalar(s)
    }
  })

  return (
    <group ref={group} position={[0, -1.55, 0]} scale={1.7}>
      <primitive ref={inner} object={scene} />
    </group>
  )
}

// Poussière ambiante qui monte au scroll
function Dust() {
  const points = useRef()
  const positions = (() => {
    const count = 80
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = (Math.random() - 0.5) * 7
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1
    }
    return arr
  })()
  useFrame((state) => {
    const p = scrollProgress()
    if (points.current) {
      points.current.position.y = p * 2.5
      points.current.rotation.z = state.clock.elapsedTime * 0.03 + p * 0.5
    }
  })
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={80} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#1a1817" transparent opacity={0.3} />
    </points>
  )
}

function CameraRig() {
  useFrame((state) => {
    const p = scrollProgress()
    state.camera.position.y += (p * 1.4 - state.camera.position.y) * 0.05
    state.camera.position.z += (5 + p * 0.8 - state.camera.position.z) * 0.05
    state.camera.lookAt(0, -0.4, 0)
  })
  return null
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      eventSource={typeof document !== 'undefined' ? document.body : undefined}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 5, 4]} intensity={1.4} />
        <directionalLight position={[-4, 2, 2]} intensity={0.5} color="#ffe8d6" />
        <hemisphereLight args={['#faf7f2', '#e8d5c4', 0.6]} />
        <Avatar />
        <Dust />
        <CameraRig />
      </Suspense>
    </Canvas>
  )
}

useGLTF.preload('/avatar.glb')
