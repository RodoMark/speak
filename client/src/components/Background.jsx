/* eslint-disable */

import * as THREE from 'three';
import { Canvas, useFrame, useLoader, useUpdate } from 'react-three-fiber';
import React, { Suspense, useRef, useState, useMemo, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import niceColors from 'nice-color-palettes'
import { useSprings, a } from 'react-spring/three';
import Boxes from './Background/Boxes';
import Content from './Background/CubesTransition';
// import Text from './Background/Text'

export default function background(props) {

  function Lights() {
    return (
      <group>
        <pointLight intensity={0.3} />
        <ambientLight intensity={0.5} />
        <spotLight
          castShadow
          intensity={0.2}
          angle={Math.PI / 7}
          position={[150, 150, 250]}
          penumbra={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
      </group>
    );
  };
  
  function Thing() {
    const ref = useRef();
    useFrame(
      () => ((ref.current.rotation.z += 0.01), (ref.current.rotation.x += 0.01))
    );
    return (
      <mesh
        ref={ref}
        onClick={(e) => console.log('click')}
        onPointerOver={(e) => console.log('hover')}
        onPointerOut={(e) => console.log('unhover')}
      >
        <boxBufferGeometry attach='geometry' args={[100, 100, 100]} />
        <meshBasicMaterial
          attach='material'
          color='white'
          opacity={0.5}
          transparent
        />
        {/*<Text />*/}
      </mesh>
    );
  }
  const dimensions = { height: '100vh', width: '100vw', 'z-index': 0 };
  return (
    <Canvas
      className='background'
      style={dimensions}
      camera={{ position: [0, 0, 0], fov: 40 }}
    >
      {/*<pointLight position={[10, 10, 10]} />*/}
      {/*<Thing />*/}
      <Lights />
      {/*<Content/>*/}
       <Boxes /> 
    </Canvas>
  );
}
