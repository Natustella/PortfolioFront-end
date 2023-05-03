export class Experiencia {
    public id?: number;
    public pos!: string;
    public logo!: string;
    public empresa!: string;
    public desde!: string;
    public hasta!: string;
    public actividad!: string;

    constructor(pos: string, logo: string, empresa: string, desde: string , hasta: string, actividad: string){
        this.pos = pos;
        this.logo = logo;
        this.empresa = empresa;
        this.desde = desde;
        this.hasta = hasta;
        this.actividad = actividad;
    }
}
