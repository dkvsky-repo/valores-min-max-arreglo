import { accionesCompraVenta } from "./src/index";

describe("Encontrar mejores dias para comprar y vender", () => {
  const datos = [110, 180, 260, 40, 310, 535, 695];
  const [comprar, vender] = accionesCompraVenta(datos);

  it("Dia para comprar", () => {
    expect(comprar).toEqual(4);
  });

  it("Dia para vender", () => {
    expect(vender).toEqual(7);
  });
});
