import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../shared/player.model';
import { playerType } from '../shared/playerType.enum';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  //@Input() player: Player;
  playerType: playerType;

  constructor() { }

  ngOnInit() {
  }

}