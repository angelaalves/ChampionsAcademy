import { Component, OnInit } from '@angular/core';
import { Event } from './event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[]=[
    new Event('Checkpoint'),
    new Event('Kickoff'),
    new Event('jantar de Natal'),
    new Event('jantar de Natal'),
    new Event('jantar de Natal'),
    new Event('jantar de Natal'),
    new Event('jantar de Natal'),
    new Event('jantar de Natal'),
    new Event('jantar de Natal')
  ];

  constructor() { }

  ngOnInit() {
  }

}