import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { eventType } from '../event-type.enum';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})

export class AddEventsComponent implements OnInit {
  addEventForm: FormGroup;

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.initForm();
        }
      )
  }

  private initForm() {
    let date='';
    let name='';
    let type='';

    this.addEventForm = new FormGroup({
      'date': new FormControl(date, Validators.required),
      'name': new FormControl(name, Validators.required),
      'type': new FormControl(type, Validators.required),
    });
  }

  addEvent(addEventForm: FormGroup) {
    (<FormArray>this.addEventForm.get('event')).push(
      new FormGroup({
        'date': new FormControl(null, Validators.required),
        'name': new FormControl(null, Validators.required),
        'type': new FormControl(null, Validators.required)
      })
    );
  }

  submit(){
    console.log(this.addEventForm);
    this.router.navigate(['/ancient_profile'], {relativeTo: this.route});
  }
}