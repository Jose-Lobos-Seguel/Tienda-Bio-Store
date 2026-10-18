import { stockProducto } from "./Stock.js";

export function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

export function agregarAlCarrito(id) {
  const carrito = obtenerCarrito();
  const enCarrito = carrito.filter((x) => x === id).length;

  if (enCarrito >= stockProducto(id)) {
    return false;
  }

  carrito.push(id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  return true;
}

export function eliminarDelCarrito(id) {
  const carrito = obtenerCarrito();
  const index = carrito.indexOf(id);
  if (index !== -1) {
    carrito.splice(index, 1);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

export function vaciarCarrito() {
  localStorage.removeItem("carrito");
}