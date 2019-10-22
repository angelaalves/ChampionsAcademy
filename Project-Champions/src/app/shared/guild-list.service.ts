import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player.model';
import { map } from 'rxjs/operators';
import { Guild } from '../guild-list/guild.model';
import { PlayerService } from './player.service';

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