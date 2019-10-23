import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log(form.value)
  }
}
