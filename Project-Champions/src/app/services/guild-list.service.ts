import { PlayerService } from './player.service';
import { Guild } from '../guild-list-start/guild-list/guild.model';
import { playerType } from '../shared/playerType.enum';
import { gender } from '../shared/playerGender.enum';
import { Injectable } from '@angular/core';
import { Player } from '../shared/player.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GuildListService{
    guildmaster=new Player('Daniel', 'daniel@daniel.com', '123456', 'some icon', playerType.GuildMaster, gender.Male);
    private guilds: Guild[]=[
        new Guild('hacknet', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADrCAMAAAAi2ZhvAAAAwFBMVEX///8AAABFKAz83J1XPyH/5KO2trYzHglWVlZFPCtcUDn/4aCpk2lHKQxaQSKeimOynG8lGw5e+v/x/zDz8/NGRkZMTEwrGQjIr33w0pY+LRerq6tBJgsbEAXe3t5i//8ZGRl6enpycnI4ODiHh4dHJSAqcHJRNiEVNzjo9C/5/zJmbBSUjyYxIRSCgoJNQDg2HQA5Ojo9MCe8vL2ZmZlZUEowFwAYFQ//7Kh4aErixY3GrXsJGBgdDw0+PBAiFg6dY6xRAAAC/klEQVR4nO3ca1faMByAcUGBgbCNKZeNyybg3NzkLuBufv9vte0c8g9HY0lpaVJ4nreSJr/yJtLAyQkRERERERERERERERERERERpaTL0LlesU2tTOhartdsESxYzoMFy3mw0sTKh2flXa/5xYaZT+vusqG7U2MzQ9eOJ13JrW9UwqoqDRl85drxJFiwnAcLlvNg+c8a9lSjcWFdO6wqm22rseORXNDlfqMvt3lcUYVX/Xu/VGO5YN8LVmEnzjNeARYsWLBgecGa7I81SRzTUuWnDdUOewtTbbngNC/TJMSSO5rJRtpbmNIX1LMkzorpPTLVhgULFixYsCJ02ZUyHdU+WTJJRs8c/8GUrr57ldj3Fqb0LHrm7l5Z+9QYfLBgwYIFC9ZxszZO+iSztzC6DPuNaJ/b6JM+ncQ1Bl9HlhPtPBEsWLBgwTpQ1sxX1mwHzHxSWzdqS65N/9OrGakVTubWrIHclPAnfZJp4zzRABYsJ8GC5TxYB8qaD1T3Czll6nr9LyVnaBf3smzzfqMmN2Dh7NMY+2SJC1l2zciqy9/jOcCUTBvHpOqwfA8WLOfBKlRSlD2rUUhRDWtWSoOVpmClKVhp6qhYte0D/c7833Gv9jz9TaZl0YOWspy+YbE9I8uUfr5VWuWctyrJcnZ5vqXTTyNLuVPn5TQrroessGDBggULFixYsGDBggULFixYsGDBggULlnvW6jwoPXfgy7aOTpo1Lb8J6oeomoGvM9a0dO2BtaWfamXnZdshurK3rCYsWLBgwYLlKeuz9CuQtawGps+O+MH6KH0JZFVfB1b1jfVu3VbWWUCwYMGCBQsWrAgsU7BgwYIFCxYs5yzTowUj61r67QOrdPo+KJl6C+v6q+rimxcsy6eR21gXqltYsGDBggUrBaxb1SGxbr5Lfw6IdXYjPR4SS/JjBw8LFixYsEo5u/OpuV0OMNheO35W8a1lDzKk8yEw/Zv1D7bXLsbO8ixYsJwHC5bzYB0Pa1Z/5WX1aD82RkRERLRjfwFI1XDHa33DrAAAAABJRU5ErkJggg==', this.guildmaster, this.playerService.getPlayers()),
        new Guild('code masters','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADrCAMAAAAi2ZhvAAAAwFBMVEX///8AAABFKAz83J1XPyH/5KO2trYzHglWVlZFPCtcUDn/4aCpk2lHKQxaQSKeimOynG8lGw5e+v/x/zDz8/NGRkZMTEwrGQjIr33w0pY+LRerq6tBJgsbEAXe3t5i//8ZGRl6enpycnI4ODiHh4dHJSAqcHJRNiEVNzjo9C/5/zJmbBSUjyYxIRSCgoJNQDg2HQA5Ojo9MCe8vL2ZmZlZUEowFwAYFQ//7Kh4aErixY3GrXsJGBgdDw0+PBAiFg6dY6xRAAAC/klEQVR4nO3ca1faMByAcUGBgbCNKZeNyybg3NzkLuBufv9vte0c8g9HY0lpaVJ4nreSJr/yJtLAyQkRERERERERERERERERERERpaTL0LlesU2tTOhartdsESxYzoMFy3mw0sTKh2flXa/5xYaZT+vusqG7U2MzQ9eOJ13JrW9UwqoqDRl85drxJFiwnAcLlvNg+c8a9lSjcWFdO6wqm22rseORXNDlfqMvt3lcUYVX/Xu/VGO5YN8LVmEnzjNeARYsWLBgecGa7I81SRzTUuWnDdUOewtTbbngNC/TJMSSO5rJRtpbmNIX1LMkzorpPTLVhgULFixYsCJ02ZUyHdU+WTJJRs8c/8GUrr57ldj3Fqb0LHrm7l5Z+9QYfLBgwYIFC9ZxszZO+iSztzC6DPuNaJ/b6JM+ncQ1Bl9HlhPtPBEsWLBgwTpQ1sxX1mwHzHxSWzdqS65N/9OrGakVTubWrIHclPAnfZJp4zzRABYsJ8GC5TxYB8qaD1T3Czll6nr9LyVnaBf3smzzfqMmN2Dh7NMY+2SJC1l2zciqy9/jOcCUTBvHpOqwfA8WLOfBKlRSlD2rUUhRDWtWSoOVpmClKVhp6qhYte0D/c7833Gv9jz9TaZl0YOWspy+YbE9I8uUfr5VWuWctyrJcnZ5vqXTTyNLuVPn5TQrroessGDBggULFixYsGDBggULFixYsGDBggULlnvW6jwoPXfgy7aOTpo1Lb8J6oeomoGvM9a0dO2BtaWfamXnZdshurK3rCYsWLBgwYLlKeuz9CuQtawGps+O+MH6KH0JZFVfB1b1jfVu3VbWWUCwYMGCBQsWrAgsU7BgwYIFCxYs5yzTowUj61r67QOrdPo+KJl6C+v6q+rimxcsy6eR21gXqltYsGDBggUrBaxb1SGxbr5Lfw6IdXYjPR4SS/JjBw8LFixYsEo5u/OpuV0OMNheO35W8a1lDzKk8yEw/Zv1D7bXLsbO8ixYsJwHC5bzYB0Pa1Z/5WX1aD82RkRERLRjfwFI1XDHa33DrAAAAABJRU5ErkJggg==', this.guildmaster,this.playerService.getPlayers()),
    ];

    constructor(private http: HttpClient, private playerService: PlayerService){}

    getPlayer(){
        return this.http.get<Player[]>('localhost:8085').subscribe(message=>{
            console.log(message);
        });
    }

    getGuild(index:number){
        return this.guilds[index];
    }
    getGuilds(){
        return this.guilds;
    }
    getGuildPlayers(index:number){
        return this.guilds[index].getPlayers();
    }
}