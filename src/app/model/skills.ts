export class Skills {
    id: number = 0;
    percent: number;
    habilidad: string;


    constructor(percent: number, habilidad: string){
        this.percent = percent;
        this.habilidad = habilidad;
    }
}
