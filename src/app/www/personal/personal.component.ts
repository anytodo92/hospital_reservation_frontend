import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  profileMenuClass : string;
  blogMenuClass : string;
  specialMenuClass : string;
  securityMenuClass : string;

  constructor(private ds : DataService,
              private router : Router) 
  { 
    this.ds.getMenuData().subscribe(x => {
      let arr = x.split("-");
      let tag = parseInt(arr[1], 10);
      
      if (tag == 0) {
        this.profileMenuClass = "active";
        this.securityMenuClass = "";
        this.blogMenuClass = "";
        this.specialMenuClass = "";
        
      }
      else if (tag == 1) {
        this.profileMenuClass = "";
        this.securityMenuClass = "active";
        this.blogMenuClass = "";
        this.specialMenuClass = "";
      }
      else if (tag == 2) {
        this.profileMenuClass = "";
        this.securityMenuClass = "";
        this.blogMenuClass = "active";
        this.specialMenuClass = "";
      } 
      else if (tag == 3) {
        this.profileMenuClass = "";
        this.securityMenuClass = "";
        this.blogMenuClass = "";
        this.specialMenuClass = "active";
      }
    });
  }

  ngOnInit() {

  }

  goSubPage(idx : number) {
    switch (idx) {
      case 0:
        this.router.navigate(["/personal", "profile"]);
      break;
      case 1:
        this.router.navigate(["/personal", "security"]);
      break;
      case 2:
        this.router.navigate(["/personal", "blog"]);
      break;
      case 3:
        this.router.navigate(["/personal", "special", "list"]);
      break;
    }
  }

}
