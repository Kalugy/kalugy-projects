import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import blender from './assets/lowPolyIslandPortal.glb'
import GUI from 'lil-gui'; 
import gsap from 'gsap'
import { useEffect } from 'react';
import { createElement } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import Img from './assets/baked2.jpg'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );


/**
 * Loaders
 */
// Texture loader
const textureLoader = new THREE.TextureLoader()
const bakedTexture = textureLoader.load(Img,
	// onLoad callback
	function ( texture ) {
		// in this example we create the material when the texture is loaded
		const material = new THREE.MeshBasicMaterial( {
			map: texture
		 } );
	},

	// onProgress callback currently not supported
	undefined,

	// onError callback
	function ( err ) {
		console.error( 'An error happened.',err );
	}
)
bakedTexture.flipY = false
bakedTexture.encoding = THREE.sRGBEncoding
renderer.outputEncoding = THREE.sRGBEncoding
// Draco loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/'); // use a full url path

// GLTF loader
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

/**
 * Materials
 */
// Baked material
const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture })
// Pole light material
const poleLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffe5 })

const portalLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })


gltfLoader.load(blender, function(gltf) {


        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterial
        })
		  // Get each object
        const portalLightMesh = gltf.scene.children.find((child) => child.name === 'PortalLight')
        const poleLightAMesh = gltf.scene.children.find((child) => child.name === 'LightLampA')
        const poleLightBMesh = gltf.scene.children.find((child) => child.name === 'LightLampB')

        console.log(portalLightMesh)
        console.log(poleLightAMesh)
        console.log(poleLightBMesh)
		// Get each object
        poleLightAMesh.material = poleLightMaterial
		poleLightBMesh.material = poleLightMaterial
		portalLightMesh.material = portalLightMaterial
        scene.add(gltf.scene)
})
/*	
gltfLoader.load(
    blender,
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterial
        })
        scene.add(gltf.scene)
    }
)*/

camera.position.x=-3;
camera.position.y=1;
camera.position.z=-1;
camera.rotation.y=-2;
camera.rotation.x=0;

const ambientLight2 = new THREE.AmbientLight(0xffffff,0.5)
scene.add(ambientLight2)
const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.x= 0
pointLight.position.y= 0
pointLight.position.z= 2
scene.add(pointLight)

function animate() {
	requestAnimationFrame( animate );


	renderer.render( scene, camera );
};

animate();
export const Option7 =() =>{

    useEffect(()=>{
        renderer.setAnimationLoop( animate );
        const elementv7 = document.querySelector("#v7canvas")
        elementv7.appendChild( renderer.domElement );
    },[])

    
    return(
        <> 
            <div id='v7canvas'></div>
        </>
    )
}
