import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import blender from './assets/FirstCharacterLowPoly4.glb'
import GUI from 'lil-gui'; 
import gsap from 'gsap'
import { useEffect } from 'react';
import { createElement } from 'react';
import { color } from 'd3';


const gui = new GUI({closed: true});
window.addEventListener('keydown',(event)=>{
    if(event.key === 'a'){

        if(gui._hidden)
            gui.show()
        else    
            gui.hide()
    }
	console.log("press Key",event.key)
})


gui.hide()


const width = window.innerWidth
const height = window.innerHeight
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;



const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();
const geometry2 = new THREE.BoxGeometry( 1, 1, 1 );

const material2 = new THREE.MeshBasicMaterial({color:0xff0000, wireframe:true})

const cube = new THREE.Mesh( geometry2, material2 );


const folder = gui.addFolder( 'Cube1' );


folder.add(material2, 'wireframe')

const folder2 = folder.addFolder( 'Position' );
folder2.add(cube.position, 'z', -10, 5,0.01)
folder2.add(cube.position, 'y', -10, 5,0.01)
folder2.add(cube.position, 'x', -10, 5,0.01)

const folder3 = folder.addFolder( 'rotation' );
folder3.add(cube.rotation, 'z', -10, 5,0.01)
folder3.add(cube.rotation, 'y', -10, 5,0.01)
folder3.add(cube.rotation, 'x', -10, 5,0.01)

const scale = folder.addFolder( 'Scale' );
scale.add(cube.scale, 'z', -10, 5,0.01)
scale.add(cube.scale, 'y', -10, 5,0.01)
scale.add(cube.scale, 'x', -10, 5,0.01)



const colordebug = {
    color: 0xff00ff,
    spin: () => {
        gsap.to(cube.rotation, {duration:1,y:cube.rotation.y+10})
    }
    
}
folder.addColor(colordebug, 'color')
   .onChange(()=>{
       material2.color.set(colordebug.color)
    })

folder.add(colordebug,'spin')


cube.position.x = 2
cube.position.z = -4

scene.add( cube );

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const ambientLight = new THREE.AmbientLight(0xffffff,0.5)
scene.add(ambientLight)

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );




const loader = new GLTFLoader();
loader.load( blender, function ( gltf ) {
    console.log("hello",gltf)
    gltf.scene.scale.set(.6,.6,.1)
    
    gltf.scene.position.set(-.4,0,0)
	scene.add( gltf.scene );


    const characterGui = gui.addFolder( 'Character' );
    const folderCharacterGui = characterGui.addFolder( 'Position' );
    folderCharacterGui.add(gltf.scene.position, 'z', -10, 5,0.01)
    folderCharacterGui.add(gltf.scene.position, 'y', -10, 5,0.01)
    folderCharacterGui.add(gltf.scene.position, 'x', -10, 5,0.01)
    
    const folderCharacterGui2 = characterGui.addFolder( 'rotation' );
    folderCharacterGui2.add(gltf.scene.rotation, 'z', -10, 5,0.01)
    folderCharacterGui2.add(gltf.scene.rotation, 'y', -10, 5,0.01)
    folderCharacterGui2.add(gltf.scene.rotation, 'x', -10, 5,0.01)
    
    const scale2 = characterGui.addFolder( 'Scale' );
    scale2.add(gltf.scene.scale, 'z', -10, 5,0.01)
    scale2.add(gltf.scene.scale, 'y', -10, 5,0.01)
    scale2.add(gltf.scene.scale, 'x', -10, 5,0.01)


}, undefined, function ( error ) {

	console.error("error", error );

} );

const ambientLight2 = new THREE.AmbientLight(0xffffff,0.5)
scene.add(ambientLight2)
const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.x= 0
pointLight.position.y= 0
pointLight.position.z= 2
scene.add(pointLight)


function animation( time ) {

    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;


    renderer.render( scene, camera );

}



const tes={
    position: "absolute",
    color: "white",
    display: "grid",
    justifyContent: "center",
    width: "100%"
}

export const Option6 =() =>{

    useEffect(()=>{
        renderer.setAnimationLoop( animation );
        const elementv6 = document.querySelector("#v6test")
        elementv6.appendChild( renderer.domElement );
    },[])
    // animation

    
    return(
        <>  <h1 style={tes}>press a</h1>
            <div id='v6test'></div>
        </>
    )
}
