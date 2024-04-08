// //declaracion de variables
// let datos = [{
//     nombre : "Juan",
//     profesion: "Docente",
//     salario: 3000000
// },
// {
//     nombre : "Pedro",
//     profesion: "Odontologo",
//     salario: 5000000
// },
// {
//     nombre : "Luisa",
//     profesion: "Psicologa",
//     salario: 4000000
// }
// ];
// //guardar la informacion el localStorage
// localStorage.setItem("info",  JSON.stringify(datos));
// alert("Datos guardados con exito");

//extraer datos de localstorage
// let informacion =  JSON.parse(localStorage.getItem("info")); 
// let info = [];
// if( informacion != null ){
//     info = informacion;
// }
// info.forEach((d,i)=>{
//     document.write(
//         ` Id: ${i+1}  
//           Nombre : ${d.nombre} <br>
//           Profesion : ${d.profesion} <br>
//           Salario : ${d.salario}
//           <hr>
//         `
//     );
// });



// //Eliminar la infomacion de localstorage
// localStorage.removeItem("info");


//declaracion de variables
let nombrePro = document.querySelector(".nombre-producto");
let precioPro = document.querySelector(".precio-producto");
let presentacionPro = document.querySelector(".presentacion-producto");
let imagenPro = document.querySelector(".imagen-producto");
let botonGuardar = document.querySelector(".btn-guardar");

//evento para el boton guardar
botonGuardar.addEventListener("click", function() {
    //alert(nombrePro.value);
    obtenerDatos();
});

//funcion para tomar los datos del formulario
function obtenerDatos() {
    let producto = {
        nombre: nombrePro.value,
        precio: precioPro.value,
        presentacion: presentacionPro.value,
        imagen: imagenPro.value 
    }
    console.log(producto);
    limpiarForm()
    return producto;
}

// funcion para limpiar el formulario

function limpiarForm (){
    nombrePro.value = "";
    precioPro.value = "";
    presentacionPro.value = "";
    imagenPro.value = "";
}








