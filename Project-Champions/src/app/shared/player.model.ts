export class Player{
    public name: string;
    public xp: number;
    public imagePath: string;

    constructor(name:string, imagePath: string){
        this.name=name;
        this.xp=0;
        this.imagePath=imagePath;
    }
}