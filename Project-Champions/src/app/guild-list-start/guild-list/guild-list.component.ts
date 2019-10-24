import { Component, OnInit } from '@angular/core';
import { Guild } from './guild.model';

import { Router, ActivatedRoute } from '@angular/router';
import { playerType } from 'src/app/shared/playerType.enum';
import { Player } from 'src/app/shared/player.model';
import { GuildListService } from 'src/app/services/guild-list.service';


@Component({
  selector: 'app-guild-list',
  templateUrl: './guild-list.component.html',
  styleUrls: ['./guild-list.component.css']
})
export class GuildListComponent implements OnInit {
  guilds: Guild[];

  constructor(private guildListService: GuildListService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.guilds=this.guildListService.getGuilds();
  }

  onResponse(){
    this.router.navigate(['./add_guild'], {relativeTo: this.route})
  }

  addGuild(){
    this.router.navigate(['./add_guild'], {relativeTo: this.route});
  }

  onGuild(index: number){
    console.log(this.guilds[index]);
  }
}