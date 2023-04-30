export class Curso {
    public id?: number;
    public titulo!: string;
    public imag!: string;
    public dado!: string;
    public fecha!: string;

    constructor(titulo: string, imag: string, dado: string, fecha: string){
        this.titulo = titulo;
        this.imag = imag;
        this.dado = dado;
        this.fecha = fecha;
    }
}


