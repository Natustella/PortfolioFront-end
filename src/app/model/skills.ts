export class Skills {
    public id?: number;
    public percent!: number;
    public habilidad!: string;


    constructor(percent: number, habilidad: string){
        this.percent = percent;
        this.habilidad = habilidad;
    }
}
