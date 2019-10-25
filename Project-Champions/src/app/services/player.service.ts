import { Player } from '../shared/player.model';
import { playerType } from '../shared/playerType.enum';
import { Injectable } from '@angular/core';
import { gender } from '../shared/playerGender.enum';

@Injectable()
export class PlayerService{
    players: Player[]=[
        new Player('One', '123@123.com', '12345', 'https://art.pixilart.com/68822edadcaa5a3.png', playerType.Warrior, gender.Male),
        new Player('Two', '123@123.com', '12345', 'https://art.pixilart.com/68822edadcaa5a3.png', playerType.Warrior, gender.Female)
    ];
    constructor(){}

    getPlayers(){
        return this.players;
    }

    getPlayer(index: number){
        return this.players[index];
    }

    addPlayer(player: Player){
        this.players.push(player);
    }

    getPlayerType(index: number){
        return this.players[index].playerType;
    }
}