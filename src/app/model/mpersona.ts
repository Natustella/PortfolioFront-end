export class Mpersona {
    public id!: number;
    public imgMe!: string;
    public nombre!: string;
    public position!: string;
    public ubicacion!: string;
    public sobreMi!: string;

    constructor(imgMe: string, nombre: string, position: string, ubicacion: string, sobreMi: string){
        this.nombre = nombre;
        this.position = position;
        this.ubicacion = ubicacion;
        this.imgMe = imgMe;
        this.sobreMi = sobreMi;
    }
}
