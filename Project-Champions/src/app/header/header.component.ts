import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  redirectToProfile(){
    this.router.navigate(['../warrior_profile'], {relativeTo: this.route});
  }

  redirectToCloset(){
    this.router.navigate(['../closet'], {relativeTo: this.route});
  }

  redirectToRewards(){
    this.router.navigate(['../rewards'], {relativeTo: this.route});
  }

  redirectToVideos(){
    this.router.navigate(['../videos'], {relativeTo: this.route});
  }

  redirectToGuild(){
    this.router.navigate(['../guild'], {relativeTo: this.route});
  }

  redirectToEvents(){
    this.router.navigate(['../events'], {relativeTo: this.route});
  }

  redirectToNotifications(){
    this.router.navigate(['../notifications'], {relativeTo: this.route});
  }
}