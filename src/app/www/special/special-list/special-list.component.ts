import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../shared/services/data.service';
import { AppConfig } from '../../../config/app.config';

@Component({
  selector: 'app-special-list',
  templateUrl: './special-list.component.html',
  styleUrls: ['./special-list.component.css']
})
export class SpecialListComponent implements OnInit {

  specialList : any;
  specTypeList : any;
  specTypeClassList : any;
  viewMode : number;

  tileViewModeClass : string;
  listViewModeClass : string;
  currentTab : number;
  
  constructor(private ds : DataService) {
    this.ds.sendMenuData("2-0");
  }

  ngOnInit() {
    
    this.getSpecTypeList();
    
    this.getSpecialList(0);
    this.setViewMode(2);
  }

  pageHandler(p : number) {
    
  }

  getSpecTypeList() {
    this.specTypeClassList = [];
    this.specTypeList = [];
    for (let i = 0; i < AppConfig.specTypeList.length; i++) {
      if (i == 0) {
        this.specTypeList.push("All");
      }
      else {
        this.specTypeList.push(AppConfig.specTypeList[i]);
      }

      this.specTypeClassList.push("");
    }
  }

  getSpecialList(tab : number) {
    this.currentTab = tab;

    for (let i = 0; i < this.specTypeClassList.length; i++) {
      if (i == tab) {
        this.specTypeClassList[i] = "active";
      }
      else {
        this.specTypeClassList[i] = "";
      }
    }

    this.specialList = [];
    for (let i = 0; i < AppConfig.tempList.length; i++) {
      if (AppConfig.tempList[i].status == 1)
        this.specialList.push(AppConfig.tempList[i]);
    }
  }

  setViewMode(mode : number) {
    this.viewMode = mode;
    if (mode == 1) {
      this.tileViewModeClass = "";
      this.listViewModeClass = "active";
    }
    else {
      this.tileViewModeClass = "active";
      this.listViewModeClass = "";
    }

    this.ds.sendSpecialViewModeStatus(this.viewMode);
  }

}
