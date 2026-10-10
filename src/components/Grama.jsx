import { useFrame, useThree } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = `
    varying vec2 vUv;
    uniform float uTime;

    void main() {
        vUv = uv;

        vec3 pos = position;

        float width = mix(1.0, 0.0, uv.y);
        pos.x *= width;

        vec3 worldPos = (modelMatrix * instanceMatrix * vec4(pos, 1.0)).xyz;

        float windSpeed = 1.9;
        float windFrequency = 1.0;
        float windStrength = 0.3;

        float wind =
            sin(
                uTime * windSpeed +
                worldPos.x * windFrequency
            );

        pos.x += wind * windStrength * uv.y;

        gl_Position =
            projectionMatrix *
            modelViewMatrix *
            instanceMatrix *
            vec4(pos, 1.0);
    }

`

const fragmentShader = `
    varying vec2 vUv;

    void main() {
        vec3 baseColor = vec3(0.05, 0.5, 0.05);
        vec3 tipColor  = vec3(0.3, 1, 0.3);

        vec3 color = mix(baseColor, tipColor, vUv.y);

        gl_FragColor = vec4(color, 1.0);
    }
`

const NADA_A_EVITAR = []

export function Grama({ count = 1200, position = [], larg = [], evitar = NADA_A_EVITAR }) {
    const meshRef = useRef()
    const scene = useThree((s) => s.scene)

    const dummy = useMemo(() => new THREE.Object3D(), [])
    const uniforms = useMemo(() => ({
        uTime: { value: 0 }
    }), [])

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime
    })

    const chavePosicao = position.join(',')
    const chaveLargura = larg.join(',')

    React.useEffect(() => {
        const [px, , pz] = position
        const [largX, altura, largZ] = larg
        const malha = meshRef.current

        const caixas = []
        const tamanho = new THREE.Vector3()
        scene.updateMatrixWorld(true)
        scene.traverse((o) => {
            if (!o.isMesh || o.isInstancedMesh || o === malha || !o.geometry) return
            const caixa = new THREE.Box3().setFromObject(o)
            if (caixa.isEmpty()) return
            caixa.getSize(tamanho)
            if (tamanho.x > 35 || tamanho.z > 35) return
            if (caixa.min.y > altura + 0.6) return
            caixa.min.x -= 0.18
            caixa.min.z -= 0.18
            caixa.max.x += 0.18
            caixa.max.z += 0.18
            caixas.push(caixa)
        })

        const livre = (wx, wz) =>
            !evitar.some(([x0, x1, z0, z1]) => wx > x0 && wx < x1 && wz > z0 && wz < z1) &&
            !caixas.some((c) => wx > c.min.x && wx < c.max.x && wz > c.min.z && wz < c.max.z)

        for (let i = 0; i < count; i++) {
            let x = 0
            let z = 0
            let ok = false
            for (let t = 0; t < 60 && !ok; t++) {
                x = (Math.random() - 0.5) * largX
                z = (Math.random() - 0.5) * largZ
                ok = livre((px ?? 0) + x, (pz ?? 0) + z)
            }
            dummy.position.set(x, altura, z)
            dummy.scale.setScalar(ok ? 0.5 + Math.random() * 0.5 : 0)
            dummy.updateMatrix()
            malha.setMatrixAt(i, dummy.matrix)
        }
        malha.instanceMatrix.needsUpdate = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count, dummy, scene, chavePosicao, chaveLargura, evitar])

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]} position={position}>
            <planeGeometry args={[0.2, 0.5, 1, 4]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                side={THREE.DoubleSide}
            />
        </instancedMesh>
    )
}