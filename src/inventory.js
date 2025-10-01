//Manejo del inventario de productos
let products = [];

function addProduct(name, price, stock) {
  products.push({ name, price, stock });
}

function restock(name, amount) {
  const product = products.find(p => p.name === name);
  if (!product) throw new Error("Producto no encontrado");
  product.stock += amount;
}

function getProduct(name) {
  return products.find(p => p.name === name);
}

function clearInventory() {
  products = [];
}

module.exports = { addProduct, restock, getProduct, clearInventory };