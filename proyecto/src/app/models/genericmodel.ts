export class GenericModel {  
    valor: string;
    texto: string;
    eliminado:boolean;

    constructor( value:string,text:string ){
        this.valor=value;
        this.texto=text;
        this.eliminado=false;
        
    }
}