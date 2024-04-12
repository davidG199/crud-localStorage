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
  if (datos != null) {
    guardarDatos(datos);
  }
  borrarTabla();
  mostrarDatos();
});

//funcion para tomar los datos del formulario
function obtenerDatos() {
  let producto = {};
  //validar que el formulario este lleno
  if (
    nombrePro.value == "" ||
    precioPro.value == "" ||
    presentacionPro == "" ||
    imagenPro.value == ""
  ) {
    alert("Todos los datos son obligatorios");
    return;
  } else {
    producto = {
      nombre: nombrePro.value,
      precio: precioPro.value,
      presentacion: presentacionPro.value,
      imagen: imagenPro.value,
    };
    console.log(producto);
    limpiarForm();
    return producto;
  }
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
            <td> <span onclick="actualizarPedido(${i})" class="btn"> 🖊️</span> </td>
            <td> <span onclick="eliminarPedido(${i})" class="btn"> ❌</span> </td>
        `;
    tabla.appendChild(fila);
  });
}

function borrarTabla() {
  let filas = document.querySelectorAll(".table tbody tr");

  filas.forEach((f) => {
    f.remove();
  });
}

//eliminar pedido de la tabla
function eliminarPedido(pos) {
  let pedidos = [];

  let pedidosPrevios = JSON.parse(localStorage.getItem("Pedidos"));

  if (pedidosPrevios != null) {
    pedidos = pedidosPrevios;
  }

  let confirmar = confirm(`¿Deseas eliminar el pedido ${pedidos[pos].nombre}?`);
  if (confirmar) {
    pedidos.splice(pos, 1);
    alert("Pedido eliminado con exito");
    //guardar los datos que quedan en el localStorage
    localStorage.setItem("Pedidos", JSON.stringify(pedidos));
    borrarTabla();
    mostrarDatos();
  }
}

//actualizar pedido
function actualizarPedido(pos) {
  let pedidos = [];

  let pedidosPrevios = JSON.parse(localStorage.getItem("Pedidos"));

  if (pedidosPrevios != null) {
    pedidos = pedidosPrevios;
  }

  nombrePro.value = pedidos[pos].nombre;
  precioPro.value = pedidos[pos].precio;
  imagenPro.value = pedidos[pos].imagen;
  presentacionPro.value = pedidos[pos].presentacion;

  let btnActualizar = document.querySelector(".btn-actualizar");
  btnActualizar.classList.toggle("d-none");
  botonGuardar.classList.toggle("d-none");

  btnActualizar.addEventListener("click", function () {
    pedidos[pos].nombre = nombrePro.value;
    pedidos[pos].precio = precioPro.value;
    pedidos[pos].presentacion = presentacionPro.value;
    pedidos[pos].imagen = imagenPro.value;
    localStorage.setItem("Pedidos", JSON.stringify(pedidos));
    alert("Dato actualizado con exito");
    limpiarForm();

    btnActualizar.classList.toggle("d-none")
    botonGuardar.classList.toggle("d-none")
    borrarTabla();
    mostrarDatos();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  borrarTabla();
  mostrarDatos();
});

// funcion para limpiar el formulario

function limpiarForm() {
  nombrePro.value = "";
  precioPro.value = "";
  presentacionPro.value = "";
  imagenPro.value = "";
}