import { WarriorComponent } from '../warrior/warrior.component';
import { playerType } from './playerType.enum';

export class Player{
    public name: string;
    public imagePath: string;
    public xp: number;
    public player: playerType;

    constructor(name:string, imagePath: string, player: playerType){
        this.name=name;
        this.imagePath=imagePath;
        this.player=player;
        this.xp=0;
    }
}