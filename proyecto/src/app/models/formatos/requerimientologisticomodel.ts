import { GenericModel, CiudadModelo, ResiduosMercanciasDeclaradasItemModel, CiudadItemModel } from "app/models";

export class RequerimientoLogisticoModel {
    id:string;
    eliminado:boolean;
    visible:boolean;
    printed:boolean;
    editable:boolean;
    createddate:string;
    closeddate:string;
    asesorasigando:string;
    numvisita:number;
    fechaasignadavisita:string;
    horaasigandavisita:string;
    recomendacionesingreso:string;
    diligenciadopor:string;
    fecha:string;
    cargo:string;
    email:string;
    hora:string;
    telefono:string;
    extencion:string;
    celular:string;    
    direccionadmin:string;
    diroperativa:string;
    nombreformulario:string;
    idformulario:string;
    ciiu: GenericModel;
    ciudad:CiudadItemModel;
    municipiodiligencia:CiudadItemModel;
    tablamercanciaspeligrosas:Array<ResiduosMercanciasDeclaradasItemModel>;
    
}