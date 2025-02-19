const panorama = new PANOLENS.ImagePanorama(panoramaUrl1);  // Usando a variável do HTML
const panorama2 = new PANOLENS.ImagePanorama(panoramaUrl2);  // Usando a variável do HTML
const imageContainer = document.querySelector(".image-container");

console.log("Adicionando panoramas...");

var infospotPositions = [
    new THREE.Vector3(-5000, -500, 2700),
    new THREE.Vector3(-3300, 0, 4000)
];

console.log("Iniciando o visualizador...");

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.8,
    controlBar: false,
});

/* ocultando o bem-vindo em alguns segundos */
setTimeout(function() {
    var a = document.getElementById("bem-vindo");
    a.style = "display:none";
}, 8000);

/* ocultando o whatsapp em alguns segundos */
setTimeout(function() {
    var a = document.getElementById("whatsapp");
    a.style = "display:none";
}, 8000);

function abrirNav() {
    document.getElementById("menuOculto").style.width = "250px";
    document.getElementById("principal").style.marginLeft = "250px";
}

function fecharNav() {
    document.getElementById("menuOculto").style.width = "0";
    document.getElementById("principal").style.marginLeft = "0";
}

panorama.link(panorama2, infospotPositions[0]);
panorama2.link(panorama, infospotPositions[1]);

viewer.add(panorama, panorama2);
