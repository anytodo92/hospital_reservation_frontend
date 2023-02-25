import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../shared/services/data.service';

import {AppConfig} from '../../config/app.config';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  specialList : any;

  constructor(private router : Router,
              private ds : DataService) {
    this.ds.sendMenuData("1-0");
  }

  ngOnInit() {
    this.getTopSpecialList();
  }

  getTopSpecialList() {
    this.specialList = [];
    for (let i = 0; i < AppConfig.tempList.length; i++) {
      if (AppConfig.tempList[i].status == 1)
        this.specialList.push(AppConfig.tempList[i]);
    }
  }

  goSpecialList() {
    this.router.navigate(["/special", "list"]);
  }

}
