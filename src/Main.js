let producto = document.getElementById('producto');
let consumo = document.getElementById('consumo');
let procedencia = document.getElementById('procedencia');


let info1 = document.getElementById('info1'); 
let info2 = document.getElementById('info2'); 
let info3 = document.getElementById('info3'); 

let capacidadNevera = document.getElementById('capacidadNevera');
let extrasTelevisor = document.getElementById('extrasTelevisor');
var tdtTelevisor = document.getElementsByName('tdtTelevisor');
let tdtBool;

let botonInventario = document.querySelector('button');
let botonFacturar = document.getElementById('botonResultados');
let botonComprar = document.getElementById('botonComprar');

let resultadosInventario = document.getElementById('inventario');
let resultadosFactura = document.getElementById('factura');

let inputCapacidad = document.getElementById('inputCapacidad');
let inputTamano = document.getElementById('inputTamano');

let precioTotal = document.getElementById('precioTotal');


let objeto;

let opcionProducto = "default";
let opcionConsumo = "default";
let opcionProcedencia = "default";

let inventario = new Inventario();
let factura = new Factura();

producto.addEventListener('change', () => {
    opcionProducto = producto.options[producto.selectedIndex].value;
    info1.innerText=producto.options[producto.selectedIndex].text;
    if(producto.options[producto.selectedIndex].value == "opcion1"){
        capacidadNevera.style.display = 'none';
        extrasTelevisor.style.display = 'none';
    } else if(producto.options[producto.selectedIndex].value == "opcion2"){
        capacidadNevera.style.display = 'block';
        extrasTelevisor.style.display = 'none';
    } else if(producto.options[producto.selectedIndex].value == "opcion3"){
        extrasTelevisor.style.display = 'block';
        capacidadNevera.style.display = 'none';
    } 

});

consumo.addEventListener('change', () => {
    opcionConsumo = consumo.options[consumo.selectedIndex].value;
    info2.innerText=consumo.options[consumo.selectedIndex].text;

});

procedencia.addEventListener('change', () => {
    opcionProcedencia = procedencia.options[procedencia.selectedIndex].value;
    info3.innerText=procedencia.options[procedencia.selectedIndex].text;
});

botonInventario.addEventListener('click', () => {
    switch (opcionProducto){
        case "opcion1":
            let electrodomesticos = new Electrodomesticos(opcionConsumo,opcionProcedencia);
            inventario.llenarInventario(electrodomesticos,"electrodomesticos");
            break;
        case "opcion2":
            let neveras = new Neveras(opcionConsumo,opcionProcedencia,inputCapacidad.value);
            inventario.llenarInventario(neveras,"neveras");
            break;
        case "opcion3":
            if(tdtTelevisor[0].checked){
                tdtBool = true;
            } else {
                tdtBool = false;
            }
            let televisores = new Televisores(opcionConsumo,opcionProcedencia,inputTamano.value,tdtBool);
            inventario.llenarInventario(televisores,"televisores");
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
            let electrodomesticos = new Electrodomesticos(opcionConsumo,opcionProcedencia);
            factura.llenarFactura(electrodomesticos,"electrodomesticos",inventario);
            inventario.quitarInventario(electrodomesticos,"electrodomesticos");
            break;
        case "opcion2":
            let neveras = new Neveras(opcionConsumo,opcionProcedencia,inputCapacidad.value);
            factura.llenarFactura(neveras,"neveras",inventario);
            inventario.quitarInventario(neveras,"neveras");
            break;
        case "opcion3":
            if(tdtTelevisor[0].checked){
                tdtBool = true;
            } else {
                tdtBool = false;
            }
            let televisores = new Televisores(opcionConsumo,opcionProcedencia,inputTamano.value,tdtBool);
            factura.llenarFactura(televisores,"televisores",inventario);
            inventario.quitarInventario(televisores,"televisores");
            break;
        default:
            console.log("Sin opcion");
            break;
    }
    resultadosFactura.innerText = "Inventario Electrodomesticos " + factura.arrayOpcion1.length + "\n" +
    "Inventario Neveras " + factura.arrayOpcion2.length + "\n" +
    "Inventario Televisores " + factura.arrayOpcion3.length;

    resultadosInventario.innerText = "Inventario Electrodomesticos " + inventario.arrayOpcion1.length + "\n" +
    "Inventario Neveras " + inventario.arrayOpcion2.length + "\n" +
    "Inventario Televisores " + inventario.arrayOpcion3.length;
    
    precioTotal.innerText = factura.calcularTotal();

});

botonComprar.addEventListener('click', () => {
    factura.limpiarFactura();

    resultadosFactura.innerText = "Inventario Electrodomesticos " + factura.arrayOpcion1.length + "\n" +
    "Inventario Neveras " + factura.arrayOpcion2.length + "\n" +
    "Inventario Televisores " + factura.arrayOpcion3.length;

    precioTotal.innerText = factura.calcularTotal();
});


