let producto = document.getElementById('producto');
let consumo = document.getElementById('consumo');
let procedencia = document.getElementById('procedencia');


let info1 = document.getElementById('info1'); 
let info2 = document.getElementById('info2'); 
let info3 = document.getElementById('info3'); 

let botonInventario = document.querySelector('button');
let botonFacturar = document.getElementById('botonResultados');
let botonComprar = document.getElementById('botonComprar');

let resultadosInventario = document.getElementById('inventario');
let resultadosFactura = document.getElementById('factura');



let objeto;

let opcionProducto = "default";

let inventario = new Inventario();
let factura = new Factura();

producto.addEventListener('change', () => {
    opcionProducto = producto.options[producto.selectedIndex].value;
    info1.innerText=producto.options[producto.selectedIndex].text;
});

consumo.addEventListener('change', () => {
    opcionConsumo = consumo.options[consumo.selectedIndex].value;
    info2.innerText=consumo.options[consumo.selectedIndex].text;
});

procedencia.addEventListener('change', () => {
    opcionProcedencia = procedencia.options[consumo.selectedIndex].value;
    info3.innerText=procedencia.options[procedencia.selectedIndex].text;
});

botonInventario.addEventListener('click', () => {
    switch (opcionProducto){
        case "opcion1":
            inventario.llenarInventario(objeto,"electrodomesticos");
            break;
        case "opcion2":
            inventario.llenarInventario(objeto,"neveras");
            break;
        case "opcion3":
            inventario.llenarInventario(objeto,"televisores");
            break;
        default:
            console.log("Sin opcion");
            break;
    }
    
    resultadosInventario.innerText = "Inventario Electrodomesticos " + inventario.arrayOpcion1.length + "\n" +
    "Inventario Neveras " + inventario.arrayOpcion2.length + "\n" +
    "Inventario Televisores " + inventario.arrayOpcion3.length;
});

botonFacturar.addEventListener('click', () => {
    switch (opcionProducto) {
        case "opcion1": 
            inventario.quitarInventario(objeto,"electrodomesticos")
            factura.llenarFactura(objeto,"electrodomesticos",inventario)
            break;
        case "opcion2":
            inventario.quitarInventario(objeto,"neveras")
            factura.llenarFactura(objeto,"neveras",inventario)
            break;
        case "opcion3":
            inventario.quitarInventario(objeto,"televisores")
            factura.llenarFactura(objeto,"televisores",inventario)
            break;
        default:
            console.log("Sin opcion");
            break;
    }
    
    resultadosInventario.innerText = "Inventario Electrodomesticos " + inventario.arrayOpcion1.length + "\n" +
    "Inventario Neveras " + inventario.arrayOpcion2.length + "\n" +
    "Inventario Televisores " + inventario.arrayOpcion3.length;

    resultadosFactura.innerText = "Inventario Electrodomesticos " + factura.arrayOpcion1.length + "\n" +
    "Inventario Neveras " + factura.arrayOpcion2.length + "\n" +
    "Inventario Televisores " + factura.arrayOpcion3.length;

});

botonComprar.addEventListener('click', () => {
});


