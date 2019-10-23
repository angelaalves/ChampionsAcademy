import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Guild } from '../guild.model';
import { GuildListService } from 'src/app/services/guild-list.service';
import { Player } from 'src/app/shared/player.model';


@Component({
  selector: 'app-guild',
  templateUrl: './guild.component.html',
  styleUrls: ['./guild.component.css']
})
export class GuildComponent implements OnInit {
  players: Player[];
  guildmaster: Player;
  guild: Guild;
  id: number;
  constructor(private guildListService: GuildListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.id= +params['id'];
      this.guild=this.guildListService.getGuild(this.id);
      this.players= this.guild.getPlayers();
      this.guildmaster=this.guild.getGuildMaster();
    });
  }

}
