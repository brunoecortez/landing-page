const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


const boton = document.querySelector('#boton');
const url = 'https://randomuser.me/api/'

const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const comentario = document.querySelector('#comentario');


const verClientes = async () => {

    try {
        url
        const respuesta = await fetch(url);
        const {results} = await respuesta.json();
        const datos = results [0];
        foto.src = datos.picture.medium;
        nombre.textContent = datos.name.first;
        apellido.textContent = datos.name.last;
    } catch ( error) {
        console.log(error);
    }
}
 
boton.addEventListener('click',verClientes)
document.addEventListener('DOMContentLoaded',verClientes)




