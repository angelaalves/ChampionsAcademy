import { Player } from '../shared/player.model';
import { playerType } from '../shared/playerType.enum';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService{
    players: Player[]=[
        new Player('One', 'https://art.pixilart.com/68822edadcaa5a3.png', playerType.Warrior),
        new Player('Two', 'https://art.pixilart.com/68822edadcaa5a3.png', playerType.Warrior)
    ];
    constructor(){}
    getPlayers(){
        return this.players;
    }

    getPlayer(index: number){
        return this.players[index];
    }

    addPLayer(player: Player){
        this.players.push(player);
    }

    getPlayerType(index:number){
        return this.players[index].playerType;
    }
}