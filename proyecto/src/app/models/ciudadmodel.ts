export class CiudadModelo {
    id: number;
    nomciudad: string;
    eliminado:boolean;

    constructor(codigo: number, nomciudad: string)   
    {
        this.id = codigo;
        this.nomciudad = nomciudad;
    }

}
