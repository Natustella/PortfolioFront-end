export class Proyecto {
    public id?: number;
    public descripcion!: string;

    constructor(descripcion: string){
        this.descripcion = descripcion;
    }
}
