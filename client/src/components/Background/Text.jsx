import * as THREE from 'three';
import React, { useMemo, useRef } from 'react';
import { useLoader, useUpdate } from 'react-three-fiber';
export default function Text({
  children,
  vAlign = 'center',
  hAlign = 'center',
  size = 1,
  color = '#000000',
  ...props
}) {
  const font = useLoader(THREE.FontLoader, '/bold.blob');
  const config = useMemo(
    () => ({
      font,
      size: 40,
      height: 30,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    [font]
  );
  const mesh = useUpdate(
    (self) => {
      const size = new THREE.Vector3();
      self.geometry.computeBoundingBox();
      self.geometry.boundingBox.getSize(size);
      self.position.x =
        hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x;
      self.position.y =
        vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y;
    },
    [children]
  );
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh ref={mesh}>
        <textBufferGeometry args={[children, config]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
}
////TEXT rendering part////
function Text1({
  children,
  vAlign = 'center',
  hAlign = 'center',
  size = 1,
  color = '#000000',
  ...props
}) {
  const font = useLoader(THREE.FontLoader, '../docs/fonts/comforta.json');
  const config = useMemo(
    () => ({
      font,
      size: 40,
      height: 30,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    [font]
  );
  const mesh = useUpdate(
    (self) => {
      const size = new THREE.Vector3();
      self.geometry.computeBoundingBox();
      self.geometry.boundingBox.getSize(size);
      self.position.x =
        hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x;
      self.position.y =
        vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y;
    },
    [children]
  );
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh ref={mesh}>
        <textBufferGeometry args={[children, config]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
}
function Jumbo() {
  const refe = useRef();
  // useFrame(({ clock }) => (refe.current.rotation.x = refe.current.rotation.y = refe.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3))
  return (
    <group refe={refe}>
      <Text hAlign='left' position={[0, 4.2, 0]} children='PARLAR' />
    </group>
  );
}
/////text rendering part
