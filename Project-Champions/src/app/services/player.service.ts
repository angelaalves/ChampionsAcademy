import { Player } from '../shared/player.model';
import { playerType } from '../shared/playerType.enum';
import { Injectable } from '@angular/core';
import { gender } from '../shared/playerGender.enum';

@Injectable()
export class PlayerService{
    imagePath: string[]=["https://art.pixilart.com/ddf8cba4822a542.png", 
    "https://art.pixilart.com/9285e0cfdde33ca.png",
    "http://icons.iconarchive.com/icons/iconsmind/outline/512/T-Shirt-icon.png",
    "https://image.flaticon.com/icons/png/512/88/88823.png"]
    players: Player[]=[
        new Player('One', '123@123.com', '12345', this.imagePath, playerType.Warrior, gender.Male),
        new Player('Two', '123@123.com', '12345', ['https://art.pixilart.com/ddf8cba4822a542.png', 
        'https://art.pixilart.com/9285e0cfdde33ca.png',
        'http://icons.iconarchive.com/icons/iconsmind/outline/512/T-Shirt-icon.png',
        'https://image.flaticon.com/icons/png/512/88/88823.png'], playerType.Warrior, gender.Female)
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