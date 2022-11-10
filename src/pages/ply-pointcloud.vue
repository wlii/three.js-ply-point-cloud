<template>
    <div>
        <template>
            <div>
              <div id="container"></div>
            </div>
          </template>
    </div>
</template>

<script>
import * as THREE from "@three/three.module.js";
import Stats from "@threExtends/jsm/libs/stats.module.js";
import { OrbitControls } from "@threExtends/jsm/controls/OrbitControls.js";
import { TWEEN } from "@threExtends/jsm/libs/tween.module.min.js";
import { PLYLoader } from '@threExtends/jsm/loaders/PLYLoader.js';
import { RGBELoader } from "@threExtends/jsm/loaders/RGBELoader.js";

export default {
  data() {
    return {
      stats: "",
      scene: "",
      renderer: "",
      camera: "",
      duration: 1000,
      controls: "",
      camLookAt: { x: 0, y: 0, z: 0 },
      cameraPosition: { x: 16, y: 4, z: 16 },
      towerPos: [
        { x: -6.7, y: 4, z: 6.7 },
        { x: 6.8, y: 4.5, z: -6.8 },
      ],
      //PLYList : ['NewOct11-Cloud.ply'], 
      PLYList : ['train.ply'], 
      positions: [
        [-7, 1.3, 9],
        [4, 2, 4],
        [9.7, 1.2, -5.5],
        [0, 9, 0],
      ],
      plyLoader :  new PLYLoader()
    };
  },
  created() {},
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    init() {
      const container = document.querySelector("#container");
      this.camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,1,1000);
      this.camera.position.set(
        this.cameraPosition.x,
        this.cameraPosition.y,
        this.cameraPosition.z
      );
      this.scene = new THREE.Scene();

      //模型抗锯齿
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.shadowMap.enabled = true;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1;
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(this.renderer.domElement);

      var clock = new THREE.Clock();
      this.stats = new Stats();
      container.appendChild(this.stats.dom);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.target.set(
        this.camLookAt.x,
        this.camLookAt.y,
        this.camLookAt.z
      );
      this.controls.update();

      //添加PLY
     this.setPLY(this.PLYList)

      //添加HDR
      this.setHDR()

      //设置背景色
      this.scene.background = new THREE.Color(0xa0a0a0);

      //添加网格
      const grid = new THREE.GridHelper(500, 100, 0x000000, 0x000000);
      grid.position.y = 0;
      grid.material.opacity = 0.2;
      grid.material.transparent = true;
      grid.name = "grid";
      this.scene.add(grid);

      var ambiColor = "#ffffff";
      var ambientLight = new THREE.AmbientLight(ambiColor);
      this.scene.add(ambientLight);
    },
    setHDR(){
     let _this = this;
     new RGBELoader().setPath( '../static/' )
					.load( '0131.hdr', function ( texture ) {
						texture.mapping = THREE.EquirectangularReflectionMapping;
						_this.scene.background = texture;
						_this.scene.environment = texture;
				})
   },
   setPLY(ply){
      let _this = this;
      this.plyLoader.load(  '../static/'+ply, function ( geometry ) {
        const material = new THREE.PointsMaterial( { 
          color: 0x00ff00,
          size: 0.5,
          blending: THREE.AdditiveBlending,
          map: _this.generateSprite()
        } );
        const mesh = new THREE.Points( geometry, material );//点云混合
        mesh.rotation.x = -89.55
        mesh.rotation.y =0
        mesh.rotation.z =0
        mesh.sortParticles = true;

        mesh.position.x =-10;
        mesh.position.y =-133;
        mesh.position.z =10;
        _this.scene.add( mesh );
      } );
   },
   generateSprite() {
            var canvas = document.createElement('canvas');
            canvas.width = 16;
            canvas.height = 16;
            var context = canvas.getContext('2d');
            var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.09, 'rgba(0,255,255,1)');
            gradient.addColorStop(0.1, 'rgba(0,0,64,1)');
            gradient.addColorStop(1, 'rgba(0,0,0,1)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, canvas.width, canvas.height);
            var texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
        },
    animate() {
      requestAnimationFrame(this.animate);
      this.render();
      this.stats.update();
    },
    render() {
      TWEEN.update();
      this.renderer.render(this.scene, this.camera);
    }
  }
}
</script>
