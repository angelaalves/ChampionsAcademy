import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm, FormArray } from '@angular/forms'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { eventType } from 'src/app/events/event-type.enum';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit{
  addUserForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.initForm();
      }
    )
  }

  submit(addUserForm: FormGroup){
    console.log(this.addUserForm);
    this.router.navigate(['/ancient_profile'], {relativeTo: this.route});
  }

  private initForm() {
    let name='';
    let email='';
    let password='';

    this.addUserForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'email': new FormControl(email, [Validators.required, Validators.minLength(10)]),
      'password': new FormControl(password, [Validators.required, Validators.minLength(6)])
    });
  }

  addUser(addUserForm: FormGroup) {
    (<FormArray>this.addUserForm.get('event')).push(
      new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        'email': new FormControl(null,[Validators.required, Validators.minLength(10)]),
        'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
      })
    );
  }
}