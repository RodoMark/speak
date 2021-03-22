import * as THREE from 'three';
import { Canvas, useFrame, useLoader, useUpdate } from 'react-three-fiber';
import React, { Suspense, useRef, useState, useMemo, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import niceColors from 'nice-color-palettes'
import { useSprings, a } from 'react-spring/three';
import Boxes from './Background/Boxes';
// import Text from './Background/Text'
export default function background(props) {
  const number = 35;
  const colors = [
    '#A2CCB6',
    '#FCEEB5',
    '#EE786E',
    '#e0feff',
    'lightpink',
    'lightblue',
  ];
  const random = (i) => {
    const r = Math.random();
    return {
      position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
      color: colors[Math.round(Math.random() * (colors.length - 1))],
      scale: [4 + r * 14, 5 + r * 14, 1],
      rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)],
    };
  };
  const data = new Array(number).fill().map(() => {
    return {
      color: colors[Math.round(Math.random() * (colors.length - 1))],
      args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
    };
  });
  function Content() {
    const [springs, set] = useSprings(number, (i) => ({
      from: random(i),
      ...random(i),
      config: { mass: 2000000000000, tension: 200000000000000000, friction: 200000 },
    }));
    useEffect(
      () =>
        void setInterval(
          () => set((i) => ({ ...random(i), delay: i * 40 })),
          43000
        ),
      []
    );
    return data.map((d, index) => (
      <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
        <boxBufferGeometry attach='geometry' args={d.args} />
        <a.meshStandardMaterial
          attach='material'
          color={springs[index].color}
          roughness={0.75}
          metalness={0.5}
        />
      </a.mesh>
    ));
  }
  function Lights() {
    return (
      <group>
        <pointLight intensity={0.3} />
        <ambientLight intensity={0.5} />
        <spotLight
          castShadow
          intensity={0.2}
          angle={Math.PI / 7}
          position={[1509, 150, 250]}
          penumbra={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
      </group>
    );
  }
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
          opacity={0.1}
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
      camera={{ position: [1, 0, 1], fov: 50 }}
    >
      {/*<pointLight position={[10, 10, 10]} />*/}
      {/*<Thing />*/}
      <Lights />
      {/*<Content/>*/}
      <Boxes />
    </Canvas>
  );
}
