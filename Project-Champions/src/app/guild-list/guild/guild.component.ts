import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/shared/player.model';
import { playerType } from 'src/app/shared/playerType.enum';


@Component({
  selector: 'app-guild',
  templateUrl: './guild.component.html',
  styleUrls: ['./guild.component.css']
})
export class GuildComponent implements OnInit {

  players: Player[];
  constructor() { }

  ngOnInit() {
  }

}
