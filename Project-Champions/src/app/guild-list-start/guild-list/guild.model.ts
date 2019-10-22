import { Player } from 'src/app/shared/player.model';


export class Guild{
    public name: string;
    public flag: string;
    public guildmaster: Player;
    public members: Player[];

    constructor(name: string, flag: string, guildmaster: Player){
        this.name=name;
        this.flag=flag;
        this.guildmaster=guildmaster;
    }
}