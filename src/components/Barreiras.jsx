import { CuboidCollider, RigidBody } from "@react-three/rapier";

export function Barreiras() {
    return (
        <>
            <RigidBody type="fixed">
                <CuboidCollider args={[0.5, 5, 20]} position={[-5, 3, 12]} rotation={[0, Math.PI / 2, 0]} />
            </RigidBody>

            <RigidBody type="fixed">
                <CuboidCollider args={[0.5, 5, 10]} position={[-15, 3, -13]} rotation={[0, Math.PI / 2, 0]} />
            </RigidBody>

            <RigidBody type="fixed">
                <CuboidCollider args={[1.5, 3, 3]} position={[-18, 3, -12]} rotation={[0, Math.PI / 2, 0]} />
            </RigidBody>

            <RigidBody type="fixed">
                <CuboidCollider args={[0.5, 5, 12]} position={[9, 3, 2]} rotation={[0, 0, 0]} />
            </RigidBody>

            <RigidBody type="fixed">
                <CuboidCollider args={[1.5, 2, 2]} position={[8.5, 1, 6]} rotation={[0, 0, 0]} />
            </RigidBody>

            <RigidBody type="fixed">
                <CuboidCollider args={[0.5, 5, 15]} position={[-20.8, 3, -2]} rotation={[0, 0, 0]} />
            </RigidBody>

        </>
    )
}