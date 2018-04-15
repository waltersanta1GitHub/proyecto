
import { CiudadModelo } from "app/models";

export class DepartamentoModelo {
    id: number;
    nombre: string;
    ciudades: [CiudadModelo];
    eliminado:boolean;
}
