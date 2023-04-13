export class Mpersona {
    id?: number;
    nombre: string;
    position: string;
    ubicacion: string;
    imgMe: string;
    sobreMi: string;

    constructor(nombre: string, position: string, ubicacion: string, imgMe: string , sobreMi: string){
        this.nombre = nombre;
        this.position = position;
        this.ubicacion = ubicacion;
        this.imgMe = imgMe;
        this.sobreMi = sobreMi;
    }
}
