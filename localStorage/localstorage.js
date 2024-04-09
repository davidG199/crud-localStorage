//declaracion de variables
let nombrePro = document.querySelector(".nombre-producto");
let precioPro = document.querySelector(".precio-producto");
let presentacionPro = document.querySelector(".presentacion-producto");
let imagenPro = document.querySelector(".imagen-producto");
let botonGuardar = document.querySelector(".btn-guardar");
let tabla = document.querySelector(".table tbody");

//evento para el boton guardar
botonGuardar.addEventListener("click", function () {
  let datos = obtenerDatos();
  guardarDatos(datos);
  borrarTabla()
  mostrarDatos()
});

//funcion para tomar los datos del formulario
function obtenerDatos() {
  let producto = {};
  //validar que el formulario este lleno
  if (
    nombrePro.value.trim() !== "" &&
    precioPro.value.trim() !== "" &&
    presentacionPro.value.trim() !== "" &&
    imagenPro.value.trim() !== ""
  ) {
    producto = {
      nombre: nombrePro.value,
      precio: precioPro.value,
      presentacion: presentacionPro.value,
      imagen: imagenPro.value,
    };
  } else {
    alert("Todos los datos son obligatorios");
  }

  console.log(producto);
  nombrePro.value = "";
  precioPro.value = "";
  presentacionPro.value = "";
  imagenPro.value = "";
  return producto;
}

//funcion para guardar los datos en localStorage
function guardarDatos(datos) {
  let pedidos = [];

  let pedidosPrevios = JSON.parse(localStorage.getItem("Pedidos"));

  if (pedidosPrevios != null) {
    pedidos = pedidosPrevios;
  }

  pedidos.push(datos);

  localStorage.setItem("Pedidos", JSON.stringify(pedidos));
  alert("Datos guardados con exito");
}

// funcion para extraer los datos guardados en el localStorage
function mostrarDatos() {
  let pedidos = [];

  let pedidosPrevios = JSON.parse(localStorage.getItem("Pedidos"));

  if (pedidosPrevios != null) {
    pedidos = pedidosPrevios;
  }

  pedidos.forEach((p, i) => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
            <td>${i + 1}</td>
            <td>${p.nombre}</td>
            <td>${p.precio}</td>
            <td>${p.presentacion}</td>
            <td> <img src="${p.imagen}" width="50%"> </td>
            <td> <span class="btn"> 🖊️</span> </td>
            <td> <span class="btn"> ❌</span> </td>
        `;
    tabla.appendChild(fila);
  });
}

function borrarTabla(){
  let filas = document.querySelectorAll(".table tbody tr")

  filas.forEach((f) => {
    f.remove()
  })
}


document.addEventListener("DOMContentLoaded", function () {
  borrarTabla()
  mostrarDatos();
});

// funcion para limpiar el formulario

// function limpiarForm (){
//     nombrePro.value = "";
//     precioPro.value = "";
//     presentacionPro.value = "";
//     imagenPro.value = "";
// }
