import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ancient-details',
  templateUrl: './ancient-details.component.html',
  styleUrls: ['./ancient-details.component.css']
})
export class AncientDetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  addSkin(){
    this.router.navigate(['./add_skin'], {relativeTo: this.route});
  }
}