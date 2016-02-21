var camera,
                scene,
                renderer,
                geometry,
                material,
                mesh,
                meshes = [],
                meshesSearch = [],
                meshCountMax = 1000,
                radius = 500,
                radiusMax = radius * 10,
                radiusMaxHalf = radiusMax * 0.5,
                radiusSearch = 400,
                searchMesh,
                baseR = 255, baseG = 0, baseB = 255,
                foundR = 0, foundG = 255, foundB = 0,
                adding = true;
init();
animate();
function init() {
    var size = 1000;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, size / size, 1, radius * 100);
    scene.add(camera);
    renderer = new THREE.WebGLRenderer();
    var canvasDOMElement = document.getElementById("#3dcanvas");
    
    renderer.setSize(size, size);
    canvasDOMElement.appendChild(renderer.domElement);
}


function animate() {
    requestAnimationFrame(animate);
    geometry = new THREE.CubeGeometry(50, 50, 50);
    material = new THREE.MeshBasicMaterial();
    material.color.setRGB(baseR, baseG, baseB);
    mesh = new THREE.Mesh(geometry, material);
    // give new object a random position in radius


    mesh.position.set(
            (Math.round(100 * rnd2())) * 30,
            (Math.round(100 * rnd2())) * 30,
            (Math.round(100 * rnd2())) * 30
            );

    scene.add(mesh);
    meshes.push(mesh);
    render();
}


function render() {
    var timer = -Date.now() / 1000;
    camera.position.x = Math.cos(timer) * 10000;
    camera.position.z = Math.sin(timer) * 10000;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}


function rnd2() {
    return ((Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) - 3) / 3;
}


