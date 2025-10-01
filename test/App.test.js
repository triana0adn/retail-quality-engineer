import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom";

test("compra reduce stock y muestra mensaje", () => {
  render(<App />);
  const button = screen.getByText("Comprar");
  fireEvent.click(button);
  expect(screen.getByText("Stock disponible: 4")).toBeInTheDocument();
  expect(screen.getByText("Compra realizada")).toBeInTheDocument();
});

test("muestra error cuando no hay stock", () => {
  render(<App />);
  const button = screen.getByText("Comprar");

  //Comprar 5 veces para agotar el stock
  for (let i = 0; i < 5; i++) {
    fireEvent.click(button);
  }

  //Stock ya en 0, un clic más para activar el mensaje de "No hay stock disponible"
  fireEvent.click(button);

  expect(screen.getByText("Stock disponible: 0")).toBeInTheDocument();
  expect(screen.getByText("No hay stock disponible")).toBeInTheDocument();
});
