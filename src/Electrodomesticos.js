class Electrodomesticos {

    constructor(consumo, procedencia) {
        this.consumo = consumo;
        this.procedencia = procedencia;
        this.setPrecioConsumo(this.consumo);
        this.setPrecioProcendencia(this.procedencia);
        this.setPrecioTotal();
    }

    setPrecioConsumo(consumo){
        switch (consumo.toLowerCase()) {
            case "a":{
                this.precioConsumo = 450000;
                break;
            }
            case "b":{
                this.precioConsumo = 350000;
                break;
            }
            case "c":{
                this.precioConsumo = 250000;
                break;
            }
            default:{
                this.precioConsumo = 0;
                break;
            }
        }
    }
    setPrecioProcendencia(procedencia){
        switch (procedencia.toLowerCase()) {
            case "nacional":{
                this.precioProcendencia = 250000;
                break;
            }
            case "importado":{
                this.precioProcendencia = 350000;
                break;
            }
            default:{
                this.precioProcendencia = 0;
                break;
            }
        }
    }
    setPrecioTotal(){
        this.precioTotal = this.precioConsumo + this.precioProcendencia;
    }
}