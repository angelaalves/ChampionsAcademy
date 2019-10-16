export class Player{
    public name: string;
    public imagePath: string;
    public xp: number;

    constructor(name:string, imagePath: string){
        this.name=name;
        this.imagePath=imagePath;
        this.xp=0;
    }
}