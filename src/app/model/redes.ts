export class Redes {
    public id?: number;
    public url!: string;
    public icoFont!: string;

    constructor(url: string, icoFont: string){
        this.url = url;
        this.icoFont = icoFont;
    }
}
