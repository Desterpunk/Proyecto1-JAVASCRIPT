class Factura{
    constructor(){
        this.arrayOpcion1 = new Array(0);
        this.arrayOpcion2 = new Array(0);
        this.arrayOpcion3 = new Array(0);
    }
    llenarFactura(objeto,producto,inventario){
        switch (producto) {
            case "electrodomesticos":
                if(inventario.arrayOpcion1.length > 0){
                    this.arrayOpcion1.push(objeto);
                    console.log("funciona");
                }
                break;
            case "neveras":
                if(inventario.arrayOpcion2.length > 0){
                    this.arrayOpcion2.push(objeto);
                }
                break;
            case "televisores":
                if(inventario.arrayOpcion3.length > 0){
                    this.arrayOpcion3.push(objeto);
                }
                break;
            default:
                break;
        }
    }

    limpiarFactura(){
        this.arrayOpcion1 = new Array(0);
        this.arrayOpcion2 = new Array(0);
        this.arrayOpcion3 = new Array(0);
    }
}