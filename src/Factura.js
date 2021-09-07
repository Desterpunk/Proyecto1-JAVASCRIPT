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

    calcularTotal(){
        let precioTotalElectrodomesticos = 0;
        let precioTotalNeveras = 0;
        let precioTotalTelevisores = 0;
        this.arrayOpcion1.forEach(element => {
            precioTotalElectrodomesticos += element.precioTotal;
        });
        this.arrayOpcion2.forEach(element => {
            precioTotalNeveras += element.precioTotal;
        });
        this.arrayOpcion3.forEach(element => {
            precioTotalTelevisores += element.precioTotal;
        });
        console.log(precioTotalElectrodomesticos);

        return "Total Electrodomesticos: " +precioTotalElectrodomesticos+
            "\n Total Neveras: " + precioTotalNeveras+
             "\n Total Televisores: " + precioTotalTelevisores;
    }
}