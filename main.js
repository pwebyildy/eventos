//alert("hola diseñadores web");alert es una funcion de javascript  para enviar mensajes al explorador
//const nombre=prompt("cual es tu nombre?")
//alert("tu nombre es  " + nombre);

const nombre= document.getElementById("nombre");

const btn =  document.getElementById("btn");


const apellido= document.getElementById("apellido");


const correo= document.getElementById("correo");


const contrasena = document.getElementById("contrasena");

const confirmarContrasena= document.getElementById("confirmarcontrasena");


console.log(contrasena)
console.log(confirmarContrasena)

btn.addEventListener("click",(e) => {
    e.preventDefault();
    console.log(nombre.value);
    console.log(apellido.value);
    console.log(correo.value);
    console.log(contrasena.value);
    console.log(confirmarContrasena.value);

    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    contrasena.value = "";
    confirmarcontrasena.value = "";
 

});
