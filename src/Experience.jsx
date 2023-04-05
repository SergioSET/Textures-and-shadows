import { OrbitControls, SpotLight } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Wall from './Wall'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, RectAreaLight, SpotLightHelper } from 'three'

export default function Experience() {
    const directionalLightRef = useRef()
    const hemisphereLightRef = useRef()
    const pointLightRef = useRef()
    const rectAreaLightRef = useRef()
    const spotLightRef = useRef()

    useHelper(directionalLightRef, DirectionalLightHelper, 1)
    useHelper(hemisphereLightRef, HemisphereLightHelper, 1)
    useHelper(pointLightRef, PointLightHelper, 1)
    useHelper(spotLightRef, SpotLightHelper, 1)

    return <>
        <Perf position="top-right" />

        <OrbitControls makeDefault />

        {/* <directionalLight ref={directionalLightRef} castShadow position={[2, 7, -5]} intensity={1.5} /> */}
        {/* <hemisphereLight ref={hemisphereLightRef} color={"red"} position={[0, 4, -6]} intensity={1.5} /> */}
        {/* <pointLight ref={pointLightRef} castShadow distance={15} position={[0, 0, -3]} intensity={1.5} /> */}
        {/* <rectAreaLight ref={rectAreaLightRef} color={"blue"} position={3} height={12} width={15} intensity={2} /> */}
        <spotLight ref={spotLightRef} angle={Math.PI / 4} castShadow position={[0, 3, -4]} intensity={1.5} />

        <ambientLight intensity={0.3} />

        <Wall />
        <Floor />
    </>
}