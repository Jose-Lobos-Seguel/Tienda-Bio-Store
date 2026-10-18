import { obtenerProductos, obtenerProducto, actualizarProducto } from "./ProductsBD";

export function obtenerStock() {
  const stock = {};
  const lista = obtenerProductos();
  for (const producto of lista) {
    stock[producto.id] = producto.stock;
  }
  return stock;
}

export function stockProducto(id) {
  const producto = obtenerProducto(id);
  if (producto) {
    return producto.stock;
  }
  return 0;
}

export function descontarStock(ids) {
  for (const id of ids) {
    const producto = obtenerProducto(id);
    if (producto) {
      producto.stock = producto.stock - 1;
      actualizarProducto(producto);
    }
  }
}