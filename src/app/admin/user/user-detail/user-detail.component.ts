import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { DataService } from '../../../shared/services/data.service';
import { AppConfig } from '../../../config/app.config';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id : number;
  userInfo : any;

  constructor(private ds : DataService,
              private route : ActivatedRoute,
              private router : Router) 
  { 
    this.ds.sendAdminMenuData("4-1");
  }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = params["id"];});
    this.getUserInfo();
  }

  getUserInfo() {
    for (let i = 0; i < AppConfig.tempUserList.length; i++) {
      if (this.id == AppConfig.tempUserList[i].id) {
        this.userInfo = AppConfig.tempUserList[i];
        break;
      }
    }
  }

  back() {
    history.back();
  }
}
