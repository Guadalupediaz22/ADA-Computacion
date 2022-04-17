// VENTANAS MODALES

//AGREGAR VENTA
const botonAgregarNuevaVenta = document.getElementById("boton-nueva-venta");
const modalAgregarNuevaVenta = document.getElementById("modal-agregar-venta");
botonAgregarNuevaVenta.onclick = () => {
  modalAgregarNuevaVenta.classList.toggle("form-agregar-venta-ocultar");
};

//EDITAR VENTA
const botonEditarVenta = document.getElementById("boton-editar-venta");
const modalEditarVenta = document.getElementById("modal-editar-venta");
botonEditarVenta.onclick = () => {
  modalEditarVenta.classList.toggle("form-editar-venta-ocultar");
};

//ELIMINAR VENTA
