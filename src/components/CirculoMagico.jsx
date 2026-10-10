import { Sparkles } from '@react-three/drei'
import * as THREE from 'three'

export function MagicMissionCircle({ position = [0, 0.05, 0] }) {

    const isMobile = window.innerWidth < 768;

    return (
        <group position={position} scale={0.6}>

            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[1.8, 2, 64]} />
                <meshBasicMaterial
                    color="#40a9ff"
                    transparent
                    opacity={0.8}
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[1.8, 32]} />
                <meshBasicMaterial
                    color="#007e82"
                    transparent
                    opacity={0.2}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            <Sparkles
                count={15}          
                scale={[3.5, 4, 3.5]} 
                size={isMobile ? 10 : 30}            
                speed={1}          
                color="#80e6ff"
            />

            <pointLight distance={5} intensity={3} color="#407cff" position={[0, 0.2, 0]} />
        </group>
    )
}