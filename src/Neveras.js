class Neveras extends Electrodomesticos{

    constructor(consumo,procedencia,capacidad) {
        super(consumo, procedencia);
        this.capacidad = capacidad;
        this.setPrecioCapacidad(this.capacidad);
    }

    setPrecioCapacidad(capacidad){
        if (capacidad > 120){
            var capacidadExtra = 0;
            capacidadExtra = (Math.floor((capacidad - 120) / 10))/20;
            this.precioCapacidad = Math.floor(this.precioTotal*capacidadExtra);
        } else {
            this.precioCapacidad = 0;
        }
        this.precioTotal += this.precioCapacidad;
    }
}