const { addProduct, restock, getProduct, clearInventory } = require("../src/inventory");

beforeEach(() => clearInventory());

test("agregar y obtener producto", () => {
  addProduct("Laptop", 1000, 10);
  const p = getProduct("Laptop");
  expect(p).toEqual({ name: "Laptop", price: 1000, stock: 10 });
});

test("restock aumenta el stock", () => {
  addProduct("Laptop", 1000, 5);
  restock("Laptop", 3);
  const p = getProduct("Laptop");
  expect(p.stock).toBe(8);
});
