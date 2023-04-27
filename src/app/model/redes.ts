export class Redes {
    id: number | undefined;
    url: string;
    icoFont: string;

    constructor(url: string, icoFont: string){
        this.url = url;
        this.icoFont = icoFont;
    }
}
