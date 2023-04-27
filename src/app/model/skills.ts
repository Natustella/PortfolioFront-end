export class Skills {
    id: number | undefined;
    percent: number;
    habilidad: string;


    constructor(percent: number, habilidad: string){
        this.percent = percent;
        this.habilidad = habilidad;
    }
}
