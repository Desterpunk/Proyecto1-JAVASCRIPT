class Televisores extends Electrodomesticos {
    constructor(consumo,procedencia,tamano,tdt) {
        super(consumo,procedencia);
        this.tamano = tamano;
        this.tdt = tdt;
        this.setPrecioTamano(this.tamano);
        this.setPrecioTdt(this.tdt);
    }


    setPrecioTamano(tamano){
        if (tamano > 40){
            this.precioTamano = this.precioTotal*0.3;
        } else {
            this.precioTamano = 0;
        }
        this.precioTotal += this.precioTamano;
    }
    setPrecioTdt(tdt) {
        if (tdt) {
            this.precioTdt = 250000;
        } else {
            this.precioTdt = 0;
        }
        this.precioTotal += this.precioTdt;
    }

}