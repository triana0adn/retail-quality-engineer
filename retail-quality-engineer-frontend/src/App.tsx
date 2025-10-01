import { useState } from "react";

function App() {
  const [stock, setStock] = useState<number>(5);
  const [mensaje, setMensaje] = useState<string>("");

  const handleCompra = () => {
    if (stock > 0) {
      setStock(stock - 1);
      setMensaje("Compra realizada");
    } else {
      setMensaje("No hay stock disponible");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Tienda Retail</h1>
      <p>Stock disponible: {stock}</p>
      <button onClick={handleCompra}>Comprar</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default App;
