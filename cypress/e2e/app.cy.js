describe("Flujo de compra dinámico en App", () => {
  beforeEach(() => {
    // Ajusta la URL según tu puerto de Vite
    cy.visit("http://localhost:5173/");
  });

  it("realiza una compra y reduce el stock", () => {
    cy.contains(/Stock disponible:/)
      .invoke("text")
      .then((text) => {
        const stockInicial = parseInt(text.replace("Stock disponible:", "").trim());

        cy.contains("Comprar").click();

        cy.contains(`Stock disponible: ${stockInicial - 1}`);
        cy.contains("Compra realizada");
      });
  });

  it("agota el stock y muestra mensaje de sin stock", () => {
    cy.contains(/Stock disponible:/)
      .invoke("text")
      .then((text) => {
        const stockInicial = parseInt(text.replace("Stock disponible:", "").trim());

        for (let i = 0; i <= stockInicial; i++) {
          cy.contains("Comprar").click();
        }

        cy.contains("No hay stock disponible");
      });
  });
});
