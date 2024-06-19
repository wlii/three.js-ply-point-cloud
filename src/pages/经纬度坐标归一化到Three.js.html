<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Three.js Line Stretch Example</title>
    <style>
        body { margin: 0; }
        canvas { display: block; }
    </style>
</head>
<body>
<script type="module">
    import * as THREE from '../build/three.module.js';
    import { OrbitControls } from './jsm/controls/OrbitControls.js';

    let camera, scene, renderer, controls;

    init();
    animate();

    function init() {
        // 创建场景
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        // 创建相机
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 100;

        // 创建渲染器
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // 原始数据
        const data = [
            105.886737, 38.036628, 30,
            105.887561, 38.036660, 30,
            105.888077, 38.036660, 30,
            105.888097, 38.036784, 53.2,
            105.887625, 38.036784, 53.2,
            105.887645, 38.036912, 42.2,
            105.888117, 38.037088, 42.3,
            105.888085, 38.037244, 54.4,
            105.887533, 38.037348, 54.4,
            105.887733, 38.037544, 39.9,
            105.887997, 38.037620, 47.5,
            105.887465, 38.037808, 61.6,
            105.887665, 38.038000, 38.5,
            105.887865, 38.038000, 38.5,
            105.888065, 38.038000, 60.3,
            105.888265, 38.038000, 60.3,
            105.888465, 38.038000, 60.3,
            105.888665, 38.038000, 60.3,
            105.888865, 38.038000, 60.3,
            105.888825, 38.037764, 37.8,
            105.888853, 38.037568, 37.8,
            105.888501, 38.037568, 62.6,
            105.888329, 38.037480, 45.6,
            105.888745, 38.037456, 42.9,
            105.888861, 38.037172, 42.9,
            105.888289, 38.036912, 31.1,
            105.888285, 38.036704, 39,
            105.888485, 38.036632, 39,
            105.888685, 38.036432, 45.3,
            105.888633, 38.036316, 58.6
        ];

        // 归一化后的数据
        const normalizedData = normalizeData(data);

        // 创建几何体和材质
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

        // 顶点数组
        const vertices = [];
        for (let i = 0; i < normalizedData.length; i++) {
            const point = normalizedData[i];
            vertices.push(point[0], point[1], point[2]);
        }

				const axesHelper = new THREE.AxesHelper(5); // 参数表示辅助线的长度
				scene.add(axesHelper);


        // 设置几何体的顶点
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        // 拉伸线条（按照 X 轴方向）
        const stretchFactor = 3;
        const positions = geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            positions[i] *= stretchFactor; // 按照 X 轴方向拉伸
        }

        // 更新几何体的顶点属性
        geometry.attributes.position.needsUpdate = true;

        // 创建线条对象
        const line = new THREE.Line(geometry, material);
        scene.add(line);

        // 创建轨道控制器
        controls = new OrbitControls(camera, renderer.domElement);

        // 添加窗口大小变化监听器
        window.addEventListener('resize', onWindowResize);
    }

    // 归一化数据
    function normalizeData(data) {
        // Step 1: Calculate min and max values for each dimension
        let minLongitude = Infinity, maxLongitude = -Infinity;
        let minLatitude = Infinity, maxLatitude = -Infinity;
        let minAltitude = Infinity, maxAltitude = -Infinity;

        for (let i = 0; i < data.length; i += 3) {
            const longitude = data[i];
            const latitude = data[i + 1];
            const altitude = data[i + 2];

            minLongitude = Math.min(minLongitude, longitude);
            maxLongitude = Math.max(maxLongitude, longitude);
            minLatitude = Math.min(minLatitude, latitude);
            maxLatitude = Math.max(maxLatitude, latitude);
            minAltitude = Math.min(minAltitude, altitude);
            maxAltitude = Math.max(maxAltitude, altitude);
        }

        // Step 2: Normalize each value to [0, 100]
        const normalizedData = [];

        for (let i = 0; i < data.length; i += 3) {
            const longitude = data[i];
            const latitude = data[i + 1];
            const altitude = data[i + 2];

            const normalizedLongitude = normalizeValue(longitude, minLongitude, maxLongitude);
            const normalizedLatitude = normalizeValue(latitude, minLatitude, maxLatitude);
            const normalizedAltitude = normalizeValue(altitude, minAltitude, maxAltitude);

            normalizedData.push([normalizedLongitude, normalizedLatitude, normalizedAltitude]);
        }

        return normalizedData;
    }

    // 归一化函数
    function normalizeValue(value, min, max) {
        return ((value - min) / (max - min)) * 100;
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        controls.update(); // 更新轨道控制器
        renderer.render(scene, camera);
    }
</script>
</body>
</html>
