import { Component, OnInit } from '@angular/core';
import { GuildListService } from 'src/app/services/guild-list.service';

@Component({
  selector: 'app-add-guild-list',
  templateUrl: './add-guild-list.component.html',
  styleUrls: ['./add-guild-list.component.css']
})
export class AddGuildListComponent implements OnInit {

  constructor(private guildService: GuildListService) { }

  ngOnInit() {
  }

  addGuildMaster(){
    this.guildService.getPlayer();
  }

  addPlayer(){
    
  }

}