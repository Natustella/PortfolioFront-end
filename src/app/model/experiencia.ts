export class Experiencia {
    id?: number;
    pos: string;
    logo: string;
    empresa: string;
    desde: string;
    hasta: string;
    actividad: string;

    constructor(pos: string, logo: string, empresa: string, desde: string , hasta: string, actividad: string){
        this.pos = pos;
        this.logo = logo;
        this.empresa = empresa;
        this.desde = desde;
        this.hasta = hasta;
        this.actividad = actividad
    }
}
