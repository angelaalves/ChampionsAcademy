import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from 'src/app/login/authentication/user.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { eventType } from 'src/app/events/event-type.enum';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent{
  addUserForm: FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute,private router: Router, private fb: FormBuilder, private http:HttpClient) { }

  onSubmit(){
    if(!this.addUserForm.valid){
      return;
    }
    const name = this.addUserForm.value.name;
    const email = this.addUserForm.value.email;
    const password = this.addUserForm.value.password;
    console.log(name + email + password);
    console.log('addUserForm' , this.addUserForm.value);
    this.router.navigate(['/ancient_profile'], {relativeTo: this.route});
  }

  /*createForm() {
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(6)]
    });
  }*/

  addUser(postData: {date: Date, name: string, type: eventType}){
    this.http.post('url', postData).subscribe(responseData=>{
      console.log(responseData);
    });
    this.router.navigate(['/ancient_profile'], {relativeTo: this.route});
  }
}