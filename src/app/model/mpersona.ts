export class Mpersona {
    id: number = 0;
    imgMe: string;
    nombre: string;
    position: string;
    ubicacion: string;
    sobreMi: string;

    constructor(imgMe: string, nombre: string, position: string, ubicacion: string, sobreMi: string){
        this.nombre = nombre;
        this.position = position;
        this.ubicacion = ubicacion;
        this.imgMe = imgMe;
        this.sobreMi = sobreMi;
    }
}
