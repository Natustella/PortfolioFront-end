export class Curso {
    id: number | undefined;
    titulo: string;
    imag: string;
    dado: string;
    fecha: string;

    constructor(titulo: string, imag: string, dado: string, fecha: string){
        this.titulo = titulo;
        this.imag = imag;
        this.dado = dado;
        this.fecha = fecha;
    }
}


