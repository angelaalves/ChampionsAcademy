import { Component, OnInit, Input } from '@angular/core';
import { Guild } from '../guild.model';

@Component({
  selector: 'app-guild-list-elem',
  templateUrl: './guild-list-elem.component.html',
  styleUrls: ['./guild-list-elem.component.css']
})
export class GuildListElemComponent implements OnInit {
  @Input() guild: Guild;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }
}
