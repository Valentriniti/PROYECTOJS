function cambiar(imagen){
let img = document.querySelector('img');
let titulo = document.querySelector ('#titulo');
img.style.width="50%";

switch (imagen) {
    case 1:
        img.src = "./img/img004.jpg"
        titulo.style.color="red";
        break;

    case 2:
        img.src = "./img/img005.jpg"
        titulo.style.color="yellow";
        break;

    case 3:
        img.src = "./img/kiki.jpg"
        titulo.style.color="blue";
        break;
    default:
    alert (imagen);
}
}