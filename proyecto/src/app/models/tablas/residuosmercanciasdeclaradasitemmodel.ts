import { GenericModel } from "app/models";

export class ResiduosMercanciasDeclaradasItemModel {
    residuo:GenericModel;
    cantidad:number;
    unidad:GenericModel;
    estado:GenericModel;
    embalaje:GenericModel; 
    eliminado:boolean;   
}