export default function Floor() {
    return (
        <mesh receiveShadow={true} position-y={- 1.5} rotation-x={- Math.PI * 0.5}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="green" />
        </mesh>
    )
}
