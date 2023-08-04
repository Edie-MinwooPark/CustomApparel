import { Canvas } from '@react-three/fiber'
import React from 'react'
import {OrbitControls, Center, useGLTF, Environment, AccumulativeShadows} from '@react-three/drei'
import { useRef } from "react"


const App = ({ position =[-1,0,2.5], fov= 25}) => {

    function Shirt(props){
        const { nodes, materials } = useGLTF("/tshirt.glb")
        return (
          <group {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.039}>
              <mesh
                geometry={nodes.Object_4.geometry}
                material={materials.FABRIC_1_FRONT_4193}
              />
              <mesh
                geometry={nodes.Object_5.geometry}
                material={materials.FABRIC_1_FRONT_4193}
              />
              <mesh
                geometry={nodes.Object_6.geometry}
                material={materials.FABRIC_1_FRONT_4193}
              />
              <mesh
                geometry={nodes.Object_7.geometry}
                material={materials.FABRIC_1_FRONT_4193}
              />
            </group>
          </group>
        );
    }

    function Backdrop(){
        return(
            <AccumulativeShadows></AccumulativeShadows>
        )
    }

  return (
    <Canvas camera ={{position, fov}}>
        <ambientLight intensity={0.5} />
        <Environment preset='city' />
        <Center>
            <Shirt />
            <Backdrop />
        </Center>
        <OrbitControls />
    </Canvas>
  )
}

export default App