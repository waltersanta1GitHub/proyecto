import { GenericModel } from "app/models";

export class ResiMercaDecEstadoItemModel {
    residuo:GenericModel;
    cantidad:number;
    unidad:GenericModel;
    estado:GenericModel;
    embalaje:GenericModel; 
    estadoembalaje:GenericModel; 
    eliminado:boolean;   
}