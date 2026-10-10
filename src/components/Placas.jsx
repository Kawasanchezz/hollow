import { Float, Text } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Placa } from "../Mapa";

export function Placas() {
    return (
        <>
            <RigidBody type='fixed' colliders="cuboid" scale={0.6} position={[-3.5, -0.3, 1.5]}>
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[1, 1.1]}>
                    <Text fontSize={window.innerWidth < 768 ? 1 : 0.7} fontWeight="bold" position={[-4.5, 2.7, -7]}>Sobre Mim</Text>
                </Float>

                <Placa />
            </RigidBody>

            <RigidBody type='fixed' colliders="cuboid" scale={0.6} position={[3.5, -0.3, 3]} rotation={[0, - Math.PI / 4, 0]}>
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[1, 1.1]}>
                    <Text fontSize={window.innerWidth < 768 ? 1 : 0.7} fontWeight="bold" position={[-4.5, 2.7, -7]} rotation={[0, Math.PI / 4, 0]}>Projetos</Text>
                </Float>

                <Placa />
            </RigidBody>

            <RigidBody type='fixed' colliders="cuboid" scale={0.6} position={[1, -0.3, 11.4]} rotation={[0, - Math.PI / 4, 0]}>
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[1, 1.1]}>
                    <Text fontSize={0.5} fontWeight="bold" position={[-4.5, 2.5, -7]} rotation={[0, Math.PI / 4, 0]}>Contato</Text>
                </Float>

                <Placa />
            </RigidBody>
        </>
    )
}