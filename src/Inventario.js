class Inventario{
    constructor(){
        this.arrayOpcion1 = new Array(0);
        this.arrayOpcion2 = new Array(0);
        this.arrayOpcion3 = new Array(0);
    }

    llenarInventario(objeto,producto){
        switch (producto) {
            case "electrodomesticos":
                this.arrayOpcion1.push(objeto);
                break;
            case "neveras":
                this.arrayOpcion2.push(objeto);
                break;
            case "televisores":
                this.arrayOpcion3.push(objeto);
                break;
            default:
                break;
        }
    }
    quitarInventario(objeto,producto){
        switch (producto) {
            case "electrodomesticos":
                this.arrayOpcion1.pop(objeto);
                break;
            case "neveras":
                this.arrayOpcion2.pop(objeto);
                break;
            case "televisores":
                this.arrayOpcion3.pop(objeto);
                break;
            default:
                break;
        }
    }
    
}
