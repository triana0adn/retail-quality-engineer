describe("Flujo de compra en la Tienda Retail", () => {
  beforeEach(() => {
    // Ajusta la URL según el puerto que use tu frontend
    cy.visit("http://localhost:5173/");
  });

  it("realiza una compra y reduce el stock", () => {
    // Leer el stock inicial
    cy.contains(/Stock disponible:/)
      .invoke("text")
      .then((text) => {
        const stockInicial = parseInt(text.replace("Stock disponible:", "").trim());

        // Solo hacer un clic para probar la compra
        cy.contains("Comprar").click();

        // Verificar que el stock bajó en 1
        cy.contains(`Stock disponible: ${stockInicial - 1}`);

        // Verificar que aparece el mensaje de compra realizada
        cy.contains("Compra realizada");
      });
  });

  it("agota el stock y muestra mensaje de sin stock", () => {
    // Capturar el stock inicial
    cy.contains(/Stock disponible:/)
      .invoke("text")
      .then((text) => {
        const stockInicial = parseInt(text.replace("Stock disponible:", "").trim());

        // Hacer clics hasta agotar stock + 1 para que aparezca mensaje de sin stock
        for (let i = 0; i <= stockInicial; i++) {
          cy.contains("Comprar").click();
        }

        // Verificar que aparece mensaje de stock agotado
        cy.contains("No hay stock disponible");
      });
  });
});
