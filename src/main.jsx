// Write the code below
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//Scene
const scene = new THREE.Scene()

//Creating the sphere
const geometry = new THREE.SphereGeometry(2, 64, 64)
const material = new THREE.MeshStandardMaterial({
	color: '#00ff83',
	roughness: 0.3
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Sizes
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
}

//Light
const light = new THREE.PointLight(0xffffff, 50, 100)
light.position.set(0, 10, 10)
scene.add(light)

//Camera
const camera = new THREE.PerspectiveCamera(
	45,
	sizes.width / sizes.height,
	0.1,
	100
)
camera.position.z = 10
scene.add(camera)

//Renderer
const canvas = document.querySelector('.webgl')
let renderer = null
if (canvas) {
	renderer = new THREE.WebGLRenderer({ canvas })
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(2)
	renderer.render(scene, camera)

}
window.addEventListener('resize', () => {
	//update sizes
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	//update camera
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()
	renderer.setSize(sizes.width, sizes.height)
})


let controls = null;
if(canvas){
    controls = new OrbitControls(camera, canvas)
	controls.enableDamping = true
	controls.enablePan = false
	controls.enableZoom = false
	controls.autoRotate = true
	controls.autoRotateSpeed = 3.5


    const loop = () => {
        controls.update()
        renderer.render(scene, camera)
        window.requestAnimationFrame(loop)
    }
    loop()
}

//write your code from here



export { scene, mesh, sizes, camera, light}
