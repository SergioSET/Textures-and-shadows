import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Door() {
    const PATH = "/static/textures/wall/"

    const props = useTexture({
        aoMap: PATH + 'ambientOcclusion.jpg',
        map: PATH + "basecolor.jpg",
        //displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
    })

    return (
        <mesh receiveShadow={true} castShadow={true} rotation-y={Math.PI / 5}>
            <boxGeometry args={[4, 3]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}