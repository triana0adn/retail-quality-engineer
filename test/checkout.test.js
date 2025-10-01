const { addProduct, clearInventory, getProduct } = require("../src/inventory");
const { checkout } = require("../src/checkout");

beforeEach(() => clearInventory());

test("checkout descuenta stock y calcula total", () => {
  addProduct("Mouse", 20, 5);
  addProduct("Teclado", 50, 2);

  const total = checkout([{ name: "Mouse", qty: 2 }, { name: "Teclado", qty: 1 }]);

  expect(total).toBe(90); // 2*20 + 1*50
  expect(getProduct("Mouse").stock).toBe(3);
});

test("no permite comprar más del stock", () => {
  addProduct("Monitor", 200, 1);
  expect(() => checkout([{ name: "Monitor", qty: 2 }]))
    .toThrow("Stock insuficiente");
});
