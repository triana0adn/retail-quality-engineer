# Retail Quality Engineer
## _Proyecto de Pruebas_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Este proyecto es básico y simula un flujo de compras en una tienda retail usando React.
Su objetivo es demostrar habilidades en automatización de pruebas unitarias y E2E, siguiendo la pirámide de pruebas, con:

- Frontend: React
- Pruebas unitarias: Jest + Testing Library
- Pruebas E2E: Cypress

## El proyecto valida funcionalidades como:

- Reducción de stock al realizar compras
- Mensajes de éxito y error según el stock disponible
- Flujo completo de compra simulado en pruebas E2E

 ## Estructura del proyecto:
```sh
retail-quality-engineer/
│
├─ src/ (Frontend React)                  
│   ├─ App.js
│   └─ index.js
│
├─ test/ (Jest unit tests)                
│   ├─ inventory.test.js
│   ├─ checkout.test.js
│   └─ App.test.js
│
├─ cypress/ (Cypress E2E tests)              
│   └─ e2e/
│       ├─ compra.cy.js
│       └─ app.cy.js
│
├─ package.json
├─ package-lock.json
└─ README.md
```


## Instalación

Clona el repositorio y instala las dependencias:


```sh
git clone <TU_REPO>
cd retail-quality-engineer
npm install
```

## Ejecutar la aplicación

```sh
npm start
```
Luego abre el navegador en: http://localhost:3000

## Ejecutar pruebas
- Pruebas unitarias (Jest)
```sh
npm test
```
- Verifica que todos los tests unitarios pasen (reducción de stock, mensajes, inventario)
- Para generar un reporte de cobertura:
```sh
npm test -- --coverage
```
## Pruebas E2E (Cypress)

```sh
npx cypress open
```

- Se abrirá la interfaz de Cypress

- Ejecuta los tests E2E en cypress/e2e/

- Simula flujos completos de compra y manejo de stock

## Pruebas E2E (Cypress)


```sh
npx cypress open
```
- Se abrirá la interfaz de Cypress
- Ejecuta los tests E2E en cypress/e2e/
- Simula flujos completos de compra y manejo de stock

## Funcionalidades

- Comprar productos y disminuir stock
- Mostrar mensajes de éxito: "Compra realizada"
- Mostrar mensajes de error: "No hay stock disponible"

Pruebas unitarias y E2E para validar el comportamiento correcto

## Visualización (Screenshots / GIFs)

- App funcionando:
<img width="482" height="357" alt="imagen" src="https://github.com/user-attachments/assets/193c1dab-6700-413f-b3be-60895b455549" />


- Jest tests pasando:
  ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")


- Cypress tests pasando:

<img width="408" height="266" alt="imagen" src="https://github.com/user-attachments/assets/4761597d-8826-43b2-8b3c-2dae529b6cba" />
<img width="962" height="750" alt="imagen" src="https://github.com/user-attachments/assets/591d00d4-6fb5-490a-b87a-94d89ca0f934" />
<img width="917" height="741" alt="imagen" src="https://github.com/user-attachments/assets/4a357bb7-79b5-41ac-8419-31d2d8454957" />




## License

MIT

**Free Software!**

