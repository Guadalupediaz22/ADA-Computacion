const local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  sucursales: ["Centro", "Caballito"],

  ventas: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    {
      fecha: new Date(2019, 1, 4),
      nombreVendedora: "Grace",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 1),
      nombreVendedora: "Ada",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 2),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "Motherboard MZI"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 10),
      nombreVendedora: "Ada",
      componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 12),
      nombreVendedora: "Grace",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 24),
      nombreVendedora: "Sheryl",
      componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 12),
      nombreVendedora: "Hedy",
      componentes: ["Monitor GPRS 3000", "HDD Toyiva"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 1),
      nombreVendedora: "Ada",
      componentes: ["Motherboard MZI", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 11),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "RAM Quinston"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 15),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 12),
      nombreVendedora: "Hedy",
      componentes: ["Motherboard ASUS 1500", "HDD Toyiva"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 21),
      nombreVendedora: "Grace",
      componentes: ["Motherboard MZI", "RAM Quinston"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 8),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 16),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 27),
      nombreVendedora: "Hedy",
      componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 22),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 5),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1500", "RAM Quinston"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 1),
      nombreVendedora: "Grace",
      componentes: ["Motherboard MZI", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 7),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor GPRS 3000", "RAM Quinston"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 14),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
      sucursal: "Centro",
    },
  ],

  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 },
  ],
};

//Proyecto
//NUEVA VENTA (cargo datos)
const selectVendedora = document.getElementById("Vendedoras");
for (const vendedora of local.vendedoras) {
  selectVendedora.innerHTML += `<option value="${vendedora}">${vendedora} </option>`;
}

const selectComponentes = document.getElementById("Componentes");
for (const componente of local.precios) {
  selectComponentes.innerHTML += `<option value="${componente.componente}">${componente.componente} </option>`;
}

const selectSucursal = document.getElementById("Sucursal");
for (const sucursal of local.sucursales) {
  selectSucursal.innerHTML += `<option value="${sucursal}">${sucursal} </option>`;
}

//EDITAR VENTA
const selectVendedoraEdit = document.getElementById("Vendedoras-editar");
for (const vendedora of local.vendedoras) {
  selectVendedoraEdit.innerHTML += `<option value="${vendedora}">${vendedora} </option>`;
}

const selectComponentesEdit = document.getElementById("Componentes-editar");
for (const componente of local.precios) {
  selectComponentesEdit.innerHTML += `<option value="${componente.componente}">${componente.componente} </option>`;
}

const selectSucursalEdit = document.getElementById("Sucursal-editar");
for (const sucursal of local.sucursales) {
  selectSucursalEdit.innerHTML += `<option value="${sucursal}">${sucursal} </option>`;
}

//PARTE 1
//1-precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la m??quina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.
const precioComponente = (componente) => {
  for (const precio of precios) {
    if (precio.componente === componente) {
      return precio.precio;
    }
  }
};

const precioMaquina = (componentes) => {
  let acc = 0;
  for (const componente of componentes) {
    acc += precioComponente(componente);
  }
  return acc;
};
//console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]));

//2-cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que form?? parte de una m??quina que se vendi??. La lista de ventas no se pasa por par??metro, se asume que est?? identificada por la variable ventas
const cantidadVentasComponente = (componente) => {
  let acc = 0;
  for (const venta of ventas) {
    if (venta.componentes.includes(componente)) {
      acc++;
    }
  }
  return acc;
};
//console.log(cantidadVentasComponente("Monitor ASC 543"));

const cantidadVentasComponente2 = (nombreComponente) => {
  let acc = 0;
  for (const venta of ventas) {
    for (const componente of venta.componentes) {
      if (nombreComponente === componente) {
        acc++;
      }
    }
  }
  return acc;
};
//console.log(cantidadVentasComponente2("RAM Quinston Fury"));

//3-vendedoraDelMes(mes, anio), se le pasa dos par??metros num??ricos, (mes, anio) y devuelve el nombre de la vendedora que m??s vendi?? en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la funci??n precioMaquina. El mes es un n??mero entero que va desde el 1 (enero) hasta el 12 (diciembre).
const ventasDelMes = (mes, anio) => {
  return ventas.filter(
    (venta) =>
      venta.fecha.getMonth() === mes - 1 && venta.fecha.getFullYear() === anio
  );
};
//console.log(ventasDelMes(2, 2019));

const contadorVentas = (ventas) => {
  let acc = 0;
  for (const venta of ventas) {
    acc += precioMaquina(venta.componentes);
  }
  return acc;
};

const vendedoraDelMes = (mes, anio) => {
  let acc = 0;
  let vendedoraMayor = "";
  for (const vendedora of vendedoras) {
    if (
      acc <
      contadorVentas(
        ventasDelMes(mes, anio).filter(
          (venta) => venta.nombreVendedora === vendedora
        )
      )
    ) {
      acc = contadorVentas(
        ventasDelMes(mes, anio).filter(
          (venta) => venta.nombreVendedora === vendedora
        )
      );
      vendedoraMayor = vendedora;
    }
  }
  return vendedoraMayor;
};
//console.log(vendedoraDelMes(1, 2019));

//4-ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un n??mero entero que va desde el 1 (enero) hasta el 12 (diciembre).
const ventasMes = (mes, anio) => contadorVentas(ventasDelMes(mes, anio));
//console.log(ventasMes(1, 2019));

//5-ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin l??mite de fecha.
const ventasVendedora = (nombre) =>
  contadorVentas(ventas.filter((venta) => venta.nombreVendedora === nombre));
//console.log(ventasVendedora("Ada"));

//6-componenteMasVendido(): Devuelve el nombre del componente que m??s ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la funci??n cantidadVentasComponente
const componenteMasVendido = () => {
  let masVendido = "";
  let acc = 0;
  for (const precio of precios) {
    if (acc < cantidadVentasComponente(precio.componente)) {
      acc = cantidadVentasComponente(precio.componente);
      masVendido = precio.componente;
    }
  }
  return masVendido;
};
//console.log(componenteMasVendido());

//7-huboVentas(mes, anio): que indica si hubo ventas en un mes determinado. El mes es un n??mero entero que va desde el 1 (enero) hasta el 12 (diciembre).
const huboVentas = (mes, anio) => ventasDelMes(mes, anio).length > 0;
//console.log(huboVentas(1, 2019));

//PARTE 2
//8-Crear la funci??n ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin l??mite de fecha.
const ventasSucursal = (sucursal) => {
  let acc = 0;
  for (const venta of ventas) {
    if ((venta.sucursal = sucursal)) {
      acc++;
    }
  }
  return acc;
};
//console.log(ventasSucursal("Centro"));

//9-Crear la funci??n sucursalDelMes(mes, anio), que se le pasa dos par??metros num??ricos, (mes, anio) y devuelve el nombre de la sucursal que m??s vendi?? en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la funci??n precioMaquina. El mes es un n??mero entero que va desde el 1 (enero) hasta el 12 (diciembre).
const sucursalDelMes = (mes, anio) => {
  let acc = 0;
  let sucursalMayor = "";
  for (const sucursal of sucursales) {
    if (
      acc <
      contadorVentas(
        ventasDelMes(mes, anio).filter((venta) => venta.sucursal === sucursal)
      )
    ) {
      acc = contadorVentas(
        ventasDelMes(mes, anio).filter((venta) => venta.sucursal === sucursal)
      );
      sucursalMayor = sucursal;
    }
  }
  return sucursalMayor;
};
//console.log(sucursalDelMes(1, 2019));

//PARTE 3
//10-renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/a??o
const renderPorMes = (anio) => {
  let meses = [];
  for (const venta of ventas) {
    !meses.includes(venta.fecha.getMonth() + 1) >
      meses.push(venta.fecha.getMonth() + 1);
  }
  meses.sort((a, b) => {
    return a - b;
  });
  let acc = "";
  for (const mes of meses) {
    acc += `En el periodo ${mes}/${anio} las ganancias fueron de $${ventasMes(
      mes,
      anio
    )}`;
  }
  return acc;
};
//console.log(renderPorMes(2019));

//11-renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal
const renderPorSucursal = () => {
  let acc = "";
  for (const sucursal of sucursales) {
    acc += `En ${sucursal} las ganancias fueron de $${ventasSucursal(
      sucursal
    )}`;
  }
  return acc;
};
//console.log(renderPorSucursal());

//12-render(): Tiene que mostrar la uni??n de los dos reportes anteriores, cual fue el producto m??s vendido y la vendedora que m??s ingresos gener?? Reporte Ventas por mes: Total de enero 2019: 1250 Total de febrero 2019: 4210 Ventas por sucursal: Total de Centro: 4195 Total de Caballito: 1265 Producto estrella: Monitor GPRS 3000 Vendedora que m??s ingresos gener??: Grace
const vendedoraHistorica = () => {
  let cantidadAcumulada = 0;
  let vendedoraMayor = "";
  for (const vendedora of vendedoras) {
    if (cantidadAcumulada < contadorVentas(ventasVendedora(vendedora))) {
      cantidadAcumulada = contadorVentas(ventasVendedora(vendedora));
      vendedoraMayor = vendedora;
    }
  }
  return vendedoraMayor;
};
//console.log(vendedoraHistorica());

// const render = () => {
//   console.log(`Reporte mensual a??o 2019`);
//   console.log(renderPorMes(2019));
//   console.log(`Reporte por sucursal a??o 2019`);
//   console.log(renderPorSucursal());
//   console.log(`Producto Estrella: ${componenteMasVendido()}`);
//   console.log(`Vendedora que m??s ingresos gener??: ${vendedoraHistorica()}`);
// };
// render();
