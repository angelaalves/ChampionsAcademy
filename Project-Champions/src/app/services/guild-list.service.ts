import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../shared/player.model';
import { map } from 'rxjs/operators';

import { PlayerService } from './player.service';
import { Guild } from '../guild-list-start/guild-list/guild.model';

@Injectable({providedIn: 'root'})
export class GuildListService{
    private guilds: Guild[]=[];
    constructor(private http: HttpClient, private playerService: PlayerService){}

    getPlayer(){
        return this.http.get<Player[]>('localhost:8085').subscribe(message=>{
            console.log(message);
        });
    }
}