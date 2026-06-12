import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Animated "data field" background:
 * - a slowly drifting 3D scatter of glowing points (like a scatter plot in space)
 * - faint connecting lines suggesting a network / regression structure
 * - subtle parallax following the mouse and scroll
 */
export default function ThreeBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x050810, 0.055)

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    )
    camera.position.z = 14

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    mount.appendChild(renderer.domElement)

    // ----- scatter points -----
    const COUNT = 700
    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)
    const cA = new THREE.Color(0x2dd4bf)
    const cB = new THREE.Color(0x38bdf8)
    const cC = new THREE.Color(0xa78bfa)

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 34
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22
      positions[i * 3 + 2] = (Math.random() - 0.5) * 22
      const t = Math.random()
      const c = t < 0.55 ? cA : t < 0.85 ? cB : cC
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const mat = new THREE.PointsMaterial({
      size: 0.09,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const points = new THREE.Points(geo, mat)
    scene.add(points)

    // ----- connecting lines (sampled nearest pairs) -----
    const linePositions = []
    for (let i = 0; i < 160; i++) {
      const a = Math.floor(Math.random() * COUNT)
      let best = -1
      let bestD = Infinity
      for (let k = 0; k < 24; k++) {
        const b = Math.floor(Math.random() * COUNT)
        if (b === a) continue
        const dx = positions[a * 3] - positions[b * 3]
        const dy = positions[a * 3 + 1] - positions[b * 3 + 1]
        const dz = positions[a * 3 + 2] - positions[b * 3 + 2]
        const d = dx * dx + dy * dy + dz * dz
        if (d < bestD) {
          bestD = d
          best = b
        }
      }
      if (best >= 0 && bestD < 14) {
        linePositions.push(
          positions[a * 3], positions[a * 3 + 1], positions[a * 3 + 2],
          positions[best * 3], positions[best * 3 + 1], positions[best * 3 + 2],
        )
      }
    }
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(linePositions), 3),
    )
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x2dd4bf,
      transparent: true,
      opacity: 0.07,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    // ----- interaction state -----
    const mouse = { x: 0, y: 0 }
    let scrollY = window.scrollY

    const onMouse = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    const onScroll = () => {
      scrollY = window.scrollY
    }
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    // ----- loop -----
    let raf
    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()
      points.rotation.y = t * 0.03 + scrollY * 0.0004
      points.rotation.x = Math.sin(t * 0.12) * 0.06 + scrollY * 0.0002
      lines.rotation.copy(points.rotation)

      camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.03
      camera.position.y += (-mouse.y * 0.8 - camera.position.y) * 0.03
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      geo.dispose()
      mat.dispose()
      lineGeo.dispose()
      lineMat.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="three-bg" ref={mountRef} />
}
