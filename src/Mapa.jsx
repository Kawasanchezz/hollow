import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mapa(props) {
  const { nodes, materials } = useGLTF('/Mapa.glb')
  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 1;
      material.metalness = 0;
      material.needsUpdate = true;
    });

  }, [materials])
  return (
    <group {...props} dispose={null}>
      <group position={[-0.002, -0.007, 0.284]} scale={0.165}>
        <group position={[-0.812, -0.077, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes_1.geometry} material={materials.wood} />
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes_2.geometry} material={materials.dirt} />
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes_3.geometry} material={materials.plant} />
        </group>
      </group>
      <group position={[-0.002, -0.007, -0.285]} scale={0.165}>
        <group position={[-0.78, -0.077, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes001_1.geometry} material={materials.wood} />
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes001_2.geometry} material={materials.dirt} />
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes001_3.geometry} material={materials.plant} />
        </group>
      </group>
      <group position={[-2.564, 0.007, 1.15]} rotation={[0, -1.56, 0]} scale={0.13}>
        <group position={[-2.147, -0.077, -0.639]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes003_1.geometry} material={materials['wood.001']} />
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes003_2.geometry} material={materials['dirt.001']} />
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes003_3.geometry} material={materials['plant.001']} />
        </group>
        <group position={[2.366, -0.077, -4.861]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes002_1.geometry} material={materials['wood.001']} />
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes002_2.geometry} material={materials['dirt.001']} />
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes002_3.geometry} material={materials['plant.001']} />
        </group>
        <group position={[-3.357, -0.077, -4.925]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes004_1.geometry} material={materials['wood.001']} />
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes004_2.geometry} material={materials['dirt.001']} />
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes004_3.geometry} material={materials['plant.001']} />
        </group>
        <group position={[-0.487, -0.077, -4.893]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes005_1.geometry} material={materials['wood.001']} />
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes005_2.geometry} material={materials['dirt.001']} />
          <mesh castShadow receiveShadow geometry={nodes.PlanterBushes005_3.geometry} material={materials['plant.001']} />
        </group>
      </group>

      <group position={[1.444, 0, 0.873]} scale={0.111}>
        <mesh castShadow receiveShadow geometry={nodes.rocks.geometry} material={materials.mat16} position={[-13.247, 0.052, 3.898]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh castShadow receiveShadow geometry={nodes.rocks001.geometry} material={materials.mat16} position={[-13.247, 0.052, 5.124]} rotation={[-Math.PI / 2, 0, 0.778]} scale={100} />
        <mesh castShadow receiveShadow geometry={nodes.rocks002.geometry} material={materials.mat16} position={[-14.829, 0.052, 5.124]} rotation={[-Math.PI / 2, 0, 2.001]} scale={100} />
        <mesh castShadow receiveShadow geometry={nodes.rocks003.geometry} material={materials.mat16} position={[-14.235, 0.052, 3.796]} rotation={[-Math.PI / 2, 0, 1.278]} scale={100} />
        <mesh castShadow receiveShadow geometry={nodes.rocks004.geometry} material={materials.mat16} position={[-13.247, 0.052, -4.075]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh castShadow receiveShadow geometry={nodes.rocks005.geometry} material={materials.mat16} position={[-13.247, 0.052, -2.849]} rotation={[-Math.PI / 2, 0, 0.778]} scale={100} />
        <mesh castShadow receiveShadow geometry={nodes.rocks006.geometry} material={materials.mat16} position={[-14.829, 0.052, -2.849]} rotation={[-Math.PI / 2, 0, 2.001]} scale={100} />
        <mesh castShadow receiveShadow geometry={nodes.rocks007.geometry} material={materials.mat16} position={[-14.235, 0.052, -4.177]} rotation={[-Math.PI / 2, 0, 1.278]} scale={100} />
        <mesh castShadow receiveShadow geometry={nodes.rocks008.geometry} material={materials.mat16} position={[-14.487, 0.052, 7.78]} rotation={[-Math.PI / 2, 0, 3.14]} scale={92.798} />
        <mesh castShadow receiveShadow geometry={nodes.rocks009.geometry} material={materials.mat16} position={[-14.485, 0.052, 6.643]} rotation={[-Math.PI / 2, 0, -2.366]} scale={92.798} />
        <mesh castShadow receiveShadow geometry={nodes.rocks010.geometry} material={materials.mat16} position={[-13.016, 0.052, 6.645]} rotation={[-Math.PI / 2, 0, -1.143]} scale={92.798} />
        <mesh castShadow receiveShadow geometry={nodes.rocks011.geometry} material={materials.mat16} position={[-13.57, 0.052, 7.877]} rotation={[-Math.PI / 2, 0, -1.866]} scale={92.798} />
        <mesh castShadow receiveShadow geometry={nodes.rocks012.geometry} material={materials.mat16} position={[-17.018, 0.052, 6.887]} rotation={[-Math.PI / 2, 0, 1.911]} scale={85.279} />
        <mesh castShadow receiveShadow geometry={nodes.rocks013.geometry} material={materials.mat16} position={[-16.032, 0.052, 6.538]} rotation={[-Math.PI / 2, 0, 2.689]} scale={85.279} />
        <mesh castShadow receiveShadow geometry={nodes.rocks014.geometry} material={materials.mat16} position={[-15.582, 0.052, 7.81]} rotation={[-Math.PI / 2, 0, -2.371]} scale={85.279} />
        <mesh castShadow receiveShadow geometry={nodes.rocks015.geometry} material={materials.mat16} position={[-16.818, 0.052, 7.71]} rotation={[-Math.PI / 2, 0, -3.095]} scale={85.279} />
        <mesh castShadow receiveShadow geometry={nodes.rocks016.geometry} material={materials.mat16} position={[-4.358, 0.052, -3.48]} rotation={[-Math.PI / 2, 0, 0]} scale={191.54} />
        <mesh castShadow receiveShadow geometry={nodes.rocks017.geometry} material={materials.mat16} position={[-0.728, 0.052, -3.48]} rotation={[-Math.PI / 2, 0, -0.521]} scale={191.54} />
        <mesh castShadow receiveShadow geometry={nodes.rocks018.geometry} material={materials.mat16} position={[1.802, 0.052, -0.082]} rotation={[-Math.PI / 2, 0, -1.488]} scale={191.54} />
        <mesh castShadow receiveShadow geometry={nodes.rocks019.geometry} material={materials.mat16} position={[1.802, 0.052, -6.526]} rotation={[-Math.PI / 2, 0, -1.488]} scale={191.54} />
        <mesh castShadow receiveShadow geometry={nodes.rocks020.geometry} material={materials.mat16} position={[1.802, 0.052, -10.033]} rotation={[-Math.PI / 2, 0, -0.628]} scale={191.54} />
      </group>
      <group position={[1.144, 0, 0.01]} scale={0.107}>
        <mesh castShadow receiveShadow geometry={nodes.Cart_1.geometry} material={materials.Wood} />
        <mesh castShadow receiveShadow geometry={nodes.Cart_2.geometry} material={materials.DarkWood} />
        <mesh castShadow receiveShadow geometry={nodes.Cart_3.geometry} material={materials.Metal} />
      </group>
      <group position={[1.268, 0.127, 0.208]} rotation={[0, -0.69, 0]} scale={0.412}>
        <mesh castShadow receiveShadow geometry={nodes.tripo_node_ad9965f3.geometry} material={materials.tripo_mat_ad9965f3} rotation={[-Math.PI / 2, 0, 0]} />
      </group>

      <group position={[-1.818, 0.365, 0.364]} scale={0.303}>
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh'].geometry} material={materials.mat9} />
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat20} />
      </group>
      <group position={[-1.818, 0.365, -0.382]} scale={0.303}>
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh001'].geometry} material={materials.mat9} />
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh001_1'].geometry} material={materials.mat20} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Node002.geometry} material={materials['mat9.001']} position={[-1.654, 0.041, 0.28]} rotation={[0, 0.416, 0]} scale={0.842} />
      <mesh castShadow receiveShadow geometry={nodes.Node003.geometry} material={materials['mat9.001']} position={[-1.462, 0.041, 0.28]} rotation={[0, 0.416, 0]} scale={0.842} />
      <mesh castShadow receiveShadow geometry={nodes.Node004.geometry} material={materials['mat9.001']} position={[-1.269, 0.041, 0.28]} rotation={[0, 0.416, 0]} scale={0.842} />
      <mesh castShadow receiveShadow geometry={nodes.Node005.geometry} material={materials['mat9.001']} position={[-1.077, 0.041, 0.28]} rotation={[0, 0.416, 0]} scale={0.842} />
      <mesh castShadow receiveShadow geometry={nodes.Node006.geometry} material={materials['mat9.001']} position={[-0.885, 0.041, 0.28]} rotation={[0, 0.416, 0]} scale={0.842} />
      <mesh castShadow receiveShadow geometry={nodes.Node007.geometry} material={materials['mat9.001']} position={[-0.693, 0.041, 0.28]} rotation={[0, 0.416, 0]} scale={0.842} />
      <mesh castShadow receiveShadow geometry={nodes.Node008.geometry} material={materials['mat9.001']} position={[-0.501, 0.041, 0.28]} rotation={[0, 0.416, 0]} scale={0.842} />
      <group position={[-1.36, 0.365, 0.364]} scale={0.303}>
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh009'].geometry} material={materials.mat9} />
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh009_1'].geometry} material={materials.mat20} />
      </group>
      <group position={[-0.902, 0.453, 0.364]} scale={0.398}>
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh010'].geometry} material={materials.mat9} />
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh010_1'].geometry} material={materials.mat20} />
      </group>
      <group position={[-0.444, 0.365, 0.364]} scale={0.303}>
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh011'].geometry} material={materials.mat9} />
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh011_1'].geometry} material={materials.mat20} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Node012.geometry} material={materials['mat9.001']} position={[-0.396, 0.041, -0.295]} rotation={[Math.PI, -0.416, Math.PI]} scale={0.842} />
      <mesh castShadow receiveShadow geometry={nodes.Node013.geometry} material={materials['mat9.001']} position={[-0.588, 0.041, -0.295]} rotation={[Math.PI, -0.416, Math.PI]} scale={0.842} />
      <mesh castShadow receiveShadow geometry={nodes.Node014.geometry} material={materials['mat9.001']} position={[-0.78, 0.041, -0.295]} rotation={[Math.PI, -0.416, Math.PI]} scale={0.842} />
      <mesh castShadow receiveShadow geometry={nodes.Node015.geometry} material={materials['mat9.001']} position={[-0.972, 0.041, -0.295]} rotation={[Math.PI, -0.416, Math.PI]} scale={0.842} />
      <mesh castShadow receiveShadow geometry={nodes.Node016.geometry} material={materials['mat9.001']} position={[-1.164, 0.041, -0.295]} rotation={[Math.PI, -0.416, Math.PI]} scale={0.842} />
      <mesh castShadow receiveShadow geometry={nodes.Node017.geometry} material={materials['mat9.001']} position={[-1.356, 0.041, -0.295]} rotation={[Math.PI, -0.416, Math.PI]} scale={0.842} />
      <mesh castShadow receiveShadow geometry={nodes.Node018.geometry} material={materials['mat9.001']} position={[-1.548, 0.041, -0.295]} rotation={[Math.PI, -0.416, Math.PI]} scale={0.842} />
      <group position={[-0.69, 0.365, -0.379]} rotation={[Math.PI, 0, Math.PI]} scale={0.303}>
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh019'].geometry} material={materials.mat9} />
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh019_1'].geometry} material={materials.mat20} />
      </group>
      <group position={[-1.147, 0.445, -0.379]} rotation={[Math.PI, 0, Math.PI]} scale={0.384}>
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh020'].geometry} material={materials.mat9} />
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh020_1'].geometry} material={materials.mat20} />
      </group>
      <group position={[-1.605, 0.365, -0.379]} rotation={[Math.PI, 0, Math.PI]} scale={0.303}>
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh021'].geometry} material={materials.mat9} />
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh021_1'].geometry} material={materials.mat20} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Plano001.geometry} material={materials.Terra} position={[-0.944, 0.009, 0]} scale={[1.479, 1.479, 0.217]} />

      <group position={[-2.468, 0.686, 2.029]} scale={0.598}>
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh022'].geometry} material={materials.mat9} />
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh022_1'].geometry} material={materials.mat20} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Node023.geometry} material={materials['mat9.001']} position={[0.008, 0.041, 1.15]} rotation={[0, 0.949, 0]} scale={0.842} />
      <mesh castShadow receiveShadow geometry={nodes.Node024.geometry} material={materials['mat9.001']} position={[0.008, 0.041, 0.749]} rotation={[0, 0.416, 0]} scale={0.842} />
      <group position={[-0.863, 0.43, 1.608]} scale={0.363}>
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh025'].geometry} material={materials.mat9} />
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh025_1'].geometry} material={materials.mat20} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Geo_RoseBush.geometry} material={materials.lambert5SG} position={[0.135, 0, 1.742]} scale={0.004} />
      <mesh castShadow receiveShadow geometry={nodes.Geo_RoseBush001.geometry} material={materials.lambert5SG} position={[-0.567, 0, 1.742]} scale={0.004} />
      <mesh castShadow receiveShadow geometry={nodes.Geo_RoseBush002.geometry} material={materials.lambert5SG} position={[-1.268, 0, 1.742]} scale={0.004} />
      <mesh castShadow receiveShadow geometry={nodes.Geo_RoseBush003.geometry} material={materials.lambert5SG} position={[-1.918, 0, 1.742]} scale={0.004} />
      <mesh castShadow receiveShadow geometry={nodes['tripo_node_e2ce9a4b-142c-4b4b-bd20-73f5a6fb0a80'].geometry} material={materials['tripo_mat_e2ce9a4b-142c-4b4b-bd20-73f5a6fb0a80']} />
      <mesh castShadow receiveShadow geometry={nodes['tripo_node_e2ce9a4b-142c-4b4b-bd20-73f5a6fb0a80001'].geometry} material={materials['tripo_mat_e2ce9a4b-142c-4b4b-bd20-73f5a6fb0a80']} />

      <group position={[-3.579, 1.02, 2.819]} scale={0.859}>
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh030'].geometry} material={materials.mat9} />
        <mesh castShadow receiveShadow geometry={nodes['Node-Mesh030_1'].geometry} material={materials.mat20} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Plano.geometry} material={materials['Grama.001']} position={[0, 0, 1.79]} scale={[6.164, 6.164, 4.87]} />
      <mesh castShadow receiveShadow geometry={nodes.Sign_Left.geometry} material={materials.Brown} position={[0.123, -0.005, 0.281]} rotation={[-Math.PI, 1.496, -Math.PI]} scale={0.182} />
      <mesh castShadow receiveShadow geometry={nodes['Node-Mesh027'].geometry} material={materials.mat9} />
      <mesh castShadow receiveShadow geometry={nodes['Node-Mesh027_1'].geometry} material={materials.mat20} />
      <mesh castShadow receiveShadow geometry={nodes['Node-Mesh028'].geometry} material={materials.mat9} />
      <mesh castShadow receiveShadow geometry={nodes['Node-Mesh028_1'].geometry} material={materials.mat20} />
      <mesh castShadow receiveShadow geometry={nodes['Node-Mesh029'].geometry} material={materials.mat9} />
      <mesh castShadow receiveShadow geometry={nodes['Node-Mesh029_1'].geometry} material={materials.mat20} />
    </group>
  )
}

export function Casas(props) {
  const { nodes, materials } = useGLTF('/Mapa.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['tripo_node_c60fd244-02a3-4d56-b902-4a63d0f10e55'].geometry} material={materials['tripo_mat_c60fd244-02a3-4d56-b902-4a63d0f10e55']} />
      <mesh geometry={nodes['tripo_node_d25dc21e-a3bd-4a8e-9d9b-80a3b66471c8'].geometry} material={materials['tripo_mat_d25dc21e-a3bd-4a8e-9d9b-80a3b66471c8']} />
      <mesh geometry={nodes['tripo_node_39938307-80a9-43f7-a3b2-e7985cfc708c'].geometry} material={materials['tripo_mat_39938307-80a9-43f7-a3b2-e7985cfc708c']} />
      <mesh geometry={nodes['tripo_node_fa8f3399-d409-4202-a671-11f436a0217d'].geometry} material={materials['tripo_mat_fa8f3399-d409-4202-a671-11f436a0217d']} />
    </group>
  );
}

export function CasaAmarela(props) {
  const { nodes, materials } = useGLTF('/Mapa.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['tripo_node_e72f2716-1f66-4327-9964-6965f5100714'].geometry} material={materials['tripo_mat_e72f2716-1f66-4327-9964-6965f5100714']} />
    </group>
  );
}

export function Coreto(props) {
  const { nodes, materials } = useGLTF('/Mapa.glb');
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes['tripo_node_47fe0076-b20e-4d3a-8fa3-3a99832de8cb'].geometry} material={materials['tripo_mat_47fe0076-b20e-4d3a-8fa3-3a99832de8cb']} />
    </group>
  );
}

export function Praca(props) {
  const { nodes, materials } = useGLTF('/Mapa.glb');
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes['tripo_node_1b29cbc3-0f9d-4c36-b255-852b541c4136'].geometry} material={materials['tripo_mat_1b29cbc3-0f9d-4c36-b255-852b541c4136']} position={[-1.764, -0.062, -1.004]} scale={0.68} />
    </group>
  );
}

export function Torre(props) {
  const { nodes, materials } = useGLTF('/Mapa.glb');
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes['tripo_node_8c59b4b1-dcf3-4e26-aff6-5970e21bc8ce'].geometry} material={materials['tripo_mat_8c59b4b1-dcf3-4e26-aff6-5970e21bc8ce']} />
    </group>
  );
}

export function Placa(props) {
  const { nodes, materials } = useGLTF('/Mapa.glb');
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Sign8_2.geometry} material={materials['Light Wood']} />
      <mesh castShadow receiveShadow geometry={nodes.Sign8_1.geometry} material={materials['Dark Wood']} />
      <mesh castShadow receiveShadow geometry={nodes.Sign8_3.geometry} material={materials.Herbs} />
    </group>
  );
}

export function TerrainPlane(props) {
  const { nodes, materials } = useGLTF('/Mapa.glb');
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes['Terrain_Plane001-Mesh'].geometry} material={materials.Grass} />
      <mesh castShadow receiveShadow geometry={nodes['Terrain_Plane001-Mesh_1'].geometry} material={materials.Ground} />
      <mesh castShadow receiveShadow geometry={nodes['Terrain_Plane001-Mesh_2'].geometry} material={materials.Snow} />
    </group>
  );
}

useGLTF.preload('/Mapa.glb')
