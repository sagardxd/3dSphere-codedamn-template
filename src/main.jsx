import * as THREE from 'three';

//Scene
const scene = new THREE.Scene();

//Creating the sphere
const geometry = new THREE.SphereGeometry(2, 64, 64)
const material = new THREE.MeshStandardMaterial({ color: "#00ff83", roughness:0.3 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//write your code from here


export { scene, mesh, sizes};
