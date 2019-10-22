import { playerType } from './playerType.enum';

export class Player{
    public name: string;
    public imagePath: string;
    public xp: number;
    public playerType: playerType;

    constructor(name:string, imagePath: string, playerType: playerType){
        this.name=name;
        this.imagePath=imagePath;
        this.playerType=playerType;
        this.xp=0;
    }
}