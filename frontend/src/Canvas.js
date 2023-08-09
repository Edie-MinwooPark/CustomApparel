import React from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Center, useGLTF, Environment, AccumulativeShadows, RandomizedLight} from "@react-three/drei"
import { useRef } from 'react'
import { easing } from "maath"
import * as THREE from 'three';
import { useSelector } from 'react-redux';  

const CanvasApp = ({position = [0,10,100], fov =40}) => {

  const cloth = useSelector(state=>state.cloth.clothType);
  console.log(cloth);

  function DynamicComponent ({cloth}){
    if(cloth === "tshirt"){
      return <Shirt />;
    }
    else if(cloth === "onepiece"){
      return <OnePiece />;
    }
    else if(cloth === "longsleeveshirt"){
      return <LongSleeveShirt />
    }else{
      return <TankTop />
    }
  }


  return(

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
                {/* <DynamicComponent cloth={cloth} /> */}
                <TankTop />
                {/* <Backdrop /> */}
            </Center>
        {/* </CameraRig> */}
    </Canvas>
  )
  }

function Shirt (props) {

  
  const color = useSelector(state => state.cloth.clothColor);
  // const clothType = useSelector(state=> state.cloth.clothType);

    // const { nodes, materials } = useGLTF(`/${clothType}.glb`);
    const { nodes, materials } = useGLTF("./tshirt.glb");
    materials.FABRIC_1_FRONT_4193.color = new THREE.Color(color)
    return (
      <group {...props} dispose={null}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
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


function OnePiece (props){
  const { nodes, materials } = useGLTF("/onepiece.glb");
  const colors = useSelector(state => state.cloth.clothColor);

  const newMaterial = new THREE.MeshStandardMaterial({
    color : new THREE.Color(colors)
  })

  return (
    <group {...props} dispose={null}>
      <group scale={0.19}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={newMaterial}
          position={[0, 49.58, 20.197]}
        />
      </group>
    </group>
  );
}

function LongSleeveShirt(props){
  const { nodes, materials } = useGLTF("longsleeveshirt.glb");
  const colors = useSelector(state => state.cloth.clothColor);

  const newMaterial = new THREE.MeshStandardMaterial({
    color : new THREE.Color(colors)
  })

  return (
    <group {...props} dispose={null}>
      <group scale={0.7}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["men-shirt_Cotton_50s_Poplin_FRONT_39668_0"].geometry}
          material={newMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["men-shirt_Cotton_50s_Poplin_FRONT_39668_0_1"].geometry
          }
          material={materials.Cotton_50s_Poplin_FRONT_39668}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["men-shirt_Cotton_50s_Poplin_FRONT_39668_0_2"].geometry
          }
          material={materials.Cotton_50s_Poplin_FRONT_39668}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["men-shirt_Cotton_50s_Poplin_FRONT_39668_0_3"].geometry
          }
          material={materials.Cotton_50s_Poplin_FRONT_39668}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["men-shirt_Material665021_0"].geometry}
          material={materials.Material665021}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["men-shirt_Material647667_0"].geometry}
          material={materials.Material647667}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["men-shirt_Material643570_0"].geometry}
          material={materials.Material643570}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["men-shirt_Material655120_0"].geometry}
          material={materials.Material655120}
        />
      </group>
    </group>
  );
}

function TankTop (props){
  const { nodes, materials } = useGLTF("/tanktop.glb");
  const colors = useSelector(state => state.cloth.clothColor);

  const newMaterial = new THREE.MeshStandardMaterial({
    color : new THREE.Color(colors)
  })
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_Front_Cuffs_FRONT_1353547_0.geometry}
        material={newMaterial}
        scale={1.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_Front_Body_FRONT_1353552_0.geometry}
        material={newMaterial}
        scale={1.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_Back_Body_FRONT_1353552_0.geometry}
        material={materials.Body_FRONT_1353552_0}
        scale={1.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_Back_Body_FRONT_1353552_0_1.geometry}
        material={materials.Body_FRONT_1353552_1}
        scale={1.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pattern2D_1004255_FABRIC_1_FRONT_1353542_0.geometry}
        material={materials.FABRIC_1_FRONT_1353542}
        scale={1.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pattern2D_1004256_FABRIC_1_FRONT_1353542_0.geometry}
        material={materials.FABRIC_1_FRONT_1353542_0}
        scale={1.2}
      />
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