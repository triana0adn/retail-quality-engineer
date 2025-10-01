const { getProduct } = require("./inventory");

function checkout(cart) {
  let total = 0;

  for (const item of cart) {
    const product = getProduct(item.name);
    if (!product) throw new Error(`Producto ${item.name} no existe`);
    if (product.stock < item.qty) throw new Error(`Stock insuficiente para ${item.name}`);

    product.stock -= item.qty;
    total += product.price * item.qty;
  }

  return total;
}

module.exports = { checkout };
