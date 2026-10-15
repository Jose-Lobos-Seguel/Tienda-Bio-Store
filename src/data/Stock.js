import products from "./Products";

export function obtenerStock() {
  const guardado = JSON.parse(localStorage.getItem("stock")) || {};
  const stock = {};

  products.forEach((p) => {
    stock[p.id] = guardado[p.id] ?? p.stock;
  });
  return stock;
}

export function stockDe(id) {
  return obtenerStock()[id];
}

export function descontarStock(ids) {
  const stock = obtenerStock();
  ids.forEach((id) => {stock[id] = stock[id] - 1;});
  localStorage.setItem("stock", JSON.stringify(stock));
}