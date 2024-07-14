import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import * as THREE from 'three';
import './main.html';

import 'bootstrap';
import swal from 'sweetalert';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import 'pc-bootstrap4-datetimepicker/build/js/bootstrap-datetimepicker.min.js';


import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
//import { VRButton } from 'three/addons/webxr/VRButton.js';
//import {VRButton} from "three/addons";

let camera, scene, renderer;
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  renderer.setAnimationLoop(render);
}

function render() {
  renderer.render(scene, camera);
}
Meteor.startup(function ()
{
  Tracker.autorun(function ()
  {

  });

});

Template.main.helpers({
  isProcessing()
  {
    return Template.instance().isProcessing.get();
  },
});

Template.main.onCreated(function ()
{
  // this.isProcessing = new ReactiveVar(true);

  // Session.set('loginflag',false);
  // Session.set('current_page','login');
  // Session.set ('currentSerialNumber','NA');
  // Session.set ('currentjobid','NA');
  // Tracker.autorun(() => {
  //   Meteor.subscribe('getJobList');
  //   Meteor.subscribe('getVoucherFiles');
  // });
});

Template.main.onRendered(async function()
{

});

Template.main.events({

  'click #btnstartWebXR': async function (event) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animate );
    document.body.appendChild( renderer.domElement );
    document.body.appendChild( VRButton.createButton( renderer ) );
    renderer.xr.enabled = true;

    //document.body.appendChild(ARButton.createButton(renderer, { requiredFeatures: ['hit-test'] }));


    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    function animate() {

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render( scene, camera );

    }
  // Set up the camera
    /*camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create the scene
    scene = new THREE.Scene();

    // Set up the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = false;
    document.body.appendChild(renderer.domElement);

    // Add AR Button
    document.body.appendChild(ARButton.createButton(renderer, { requiredFeatures: ['hit-test'] }));

    // Create a simple cube
    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, -0.5); // Position the cube 0.5 meters in front of the camera
    scene.add(cube);

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);*/



  },
});
