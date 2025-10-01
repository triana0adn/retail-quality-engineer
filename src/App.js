import React, { useState } from "react";

export default function App() {
  const [stock, setStock] = useState(5);
  const [message, setMessage] = useState("");

  const handleBuy = () => {
    if (stock > 0) {
      setStock(stock - 1);
      setMessage("Compra realizada");
    } else {
      setMessage("No hay stock disponible");
    }
  };

  return (
    <div>
      <h1>Tienda Retail</h1>
      <p>Stock disponible: {stock}</p>
      <button onClick={handleBuy}>Comprar</button>
      <p>{message}</p>
    </div>
  );
}
