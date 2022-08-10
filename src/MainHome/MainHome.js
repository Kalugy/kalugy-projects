import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import GUI from 'lil-gui'; 
import gsap from 'gsap'
import { useEffect } from 'react';


import font1 from "./fonts/optimer_bold.typeface.json"
import font2 from "./fonts/Journal_Dingbats1_Regular.json"
import font3 from "./fonts/helvetiker_regular.typeface.json"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'


import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js'
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js'


const gui2 = new GUI({closed: true});
window.addEventListener('keydown',(event)=>{
    if(event.key === 'j'){
        if(gui2._hidden)
            gui2.show()
        else    
            gui2.hide()
    }
})


gui2.hide()

const scene = new THREE.Scene();

scene.background = new THREE.Color(0xE0DDAA);

const plane = new THREE.Mesh(new THREE.PlaneGeometry(500, 500), new THREE.MeshPhongMaterial({ color: 0x0a7d15 }));
plane.rotation.x = - Math.PI / 2
plane.position.y = -30
plane.receiveShadow = true
scene.add(plane);


const width = window.innerWidth
const height = window.innerHeight
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.set( -10, -40, 60 );


const loader = new FontLoader();


const icon = new TextGeometry('iabcdef', {
    font: loader.parse(font2),
    size: 5,
    height: 1
});

const geometry = new TextGeometry('Welcome', {
    font: loader.parse(font3),
    size: 5,
    height: 1
});
const geometry2 = new TextGeometry('Menu', {
    font: loader.parse(font3),
    size: 5,
    height: 1
});
const geometry3 = new TextGeometry('Soon . . ', {
    font: loader.parse(font3),
    size: 5,
    height: 1
});
const materials = [
    new THREE.MeshPhongMaterial({ color: 0xEEEDDE }), // front
    new THREE.MeshPhongMaterial({ color: 0x063f3f }) // side
];
const textMesh1 = new THREE.Mesh(geometry, materials);
textMesh1.castShadow = true
textMesh1.position.y = 0
textMesh1.position.x = -15
textMesh1.position.z = 0
const textMesh2 = new THREE.Mesh(geometry2, materials);
textMesh2.castShadow = true
textMesh2.position.y = 20
textMesh2.position.x = -50
textMesh2.position.z = 0
const textMesh3 = new THREE.Mesh(geometry3, materials);
textMesh3.castShadow = true
textMesh3.position.y = -20
textMesh3.position.x = 30
textMesh3.position.z = 0

const textMesh4 = new THREE.Mesh(icon, materials);
textMesh4.castShadow = true
textMesh4.position.y = -10
textMesh4.position.x = 0
textMesh4.position.z = 0

scene.add(textMesh2)
scene.add(textMesh3)
scene.add(textMesh4)

const folder3 = gui2.addFolder( 'letter' );
const folderCharacterGui2 = folder3.addFolder( 'Position' );


scene.add(textMesh1)
console.log(textMesh1)

const ambientLight2 = new THREE.AmbientLight(0xffffff,0.5)
scene.add(ambientLight2)
const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.x= 0
pointLight.position.y= 0
pointLight.position.z= 0
scene.add(pointLight)


const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();


function animation( time ) {

    renderer.render( scene, camera );

}


export const MainHome = () =>{
    
    useEffect(()=>{
        renderer.setAnimationLoop( animation );
        const elementv6 = document.querySelector("#mainHome")
        elementv6.appendChild( renderer.domElement );
    },[])
    // animation

    
    return(
        <>  
            <div id='mainHome'></div>
        </>
    )
}