import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/shared/player.model';
import { playerType } from 'src/app/shared/playerType.enum';
import { gender } from 'src/app/shared/playerGender.enum';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent{
  AddUserForm: NgForm;
  constructor(private route: ActivatedRoute,private router: Router, private http:HttpClient, private playerService: PlayerService) { }

  onSubmit(form:NgForm){
    /*if(!form.valid){
      return;
    }*/
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    const gender = form.value.gender;
    const playerType = form.value.playerType;
    this.playerService.addPLayer(new Player(name, email, password, 'one image', playerType, gender));
    console.log('addUserForm' , form.value);
    this.router.navigate(['/ancient_profile'], {relativeTo: this.route});
  }

  /*createForm() {
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(6)]
    });
  }*/

  /*addUser(postData: {date: Date, name: string, type: eventType}){
    this.http.post('url', postData).subscribe(responseData=>{
      console.log(responseData);
    });
    this.router.navigate(['/ancient_profile'], {relativeTo: this.route});
  }*/
}