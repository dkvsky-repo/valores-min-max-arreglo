/**
 * Encontrar valor minimo y maximo en un arreglo
 *
 * Crear una funcion que reciba un arreglo con precios
 * diarios de acciones. Encontrar el mejor dia para comprar
 * y el mejor dia para vender.
 *
 * Por ejemplo:
 * accionesCompraVenta([110, 180, 260, 40, 310, 535, 695])
 * Solucion: "El mejor dia para comprar es el 4,
 * y para vender es el 7"
 */

/* eslint-disable no-unused-vars */
const datos = [110, 180, 260, 40, 310, 535, 695];

export const accionesCompraVenta = (datos) => {
  const comprar = datos.indexOf(Math.min(...datos)) + 1;
  const vender = datos.indexOf(Math.max(...datos)) + 1;
  return [comprar, vender];
};

const buscarDias = (datos) => {
  const [comprar, vender] = accionesCompraVenta(datos);
  console.log(
    `El mejor dia para comprar es el ${comprar},`,
    `y para vender es el ${vender}`
  );
};

buscarDias(datos);
