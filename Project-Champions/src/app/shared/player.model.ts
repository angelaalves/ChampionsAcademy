import { playerType } from './playerType.enum';

export class Player{
    public name: string;
    public imagePath: string;
    public xp: number;
    public playerType: playerType;
    public coinsGive: number;
    public coinsReceived: number;

    constructor(name:string, imagePath: string, playerType: playerType){
        this.name=name;
        this.imagePath=imagePath;
        this.playerType=playerType;
        this.xp=80;
        this.coinsGive=20;
        this.coinsReceived=20;
    }
}