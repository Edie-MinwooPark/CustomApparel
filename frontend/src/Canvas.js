import React from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Center, useGLTF, Environment, AccumulativeShadows, RandomizedLight} from "@react-three/drei"
import { useRef } from 'react'
import { easing } from "maath"
import * as THREE from 'three';
import { useSelector } from 'react-redux';  

const CanvasApp = ({position = [0,10,70], fov =40}) => (
    <Canvas
    shadows
    camera={{position, fov}}
    eventSource={document.getElementById('root')}
    eventPrefix='client'
    >
        <ambientLight intensity={0.5} />
        <Environment preset='city' />
        {/* <CameraRig> */}
            <Center>
                <Shirt />
                {/* <Backdrop /> */}
            </Center>
        {/* </CameraRig> */}
    </Canvas>
)

function Shirt (props) {

  
  const color = useSelector(state => state.cloth.clothColor);


    const { nodes, materials } = useGLTF("/tshirt.glb");
    materials.FABRIC_1_FRONT_4193.color = new THREE.Color(color)
    return (
      <group {...props} dispose={null}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.039}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.FABRIC_1_FRONT_4193}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.FABRIC_1_FRONT_4193}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.FABRIC_1_FRONT_4193}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.FABRIC_1_FRONT_4193}
          />
        </group>
      </group>
    );
}



// function CameraRig({ children }){
//     const group = useRef()
//     useFrame((state, delta)=>{
//         easing.dampE(
//             group.current.rotation,
//             [-state.pointer.y /5 , state.pointer.x /1 , 0, 0],
//             0.4,
//             delta
//         )
//     })
//     return <group ref ={group}>{children}</group>
// }

export default CanvasApp;