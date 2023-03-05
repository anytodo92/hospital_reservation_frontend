import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { AppConfig } from '../../config/app.config';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  specTypeID : number;
  keyword : string;

  specTypeList : any;
  specialList : any;

  viewMode : number;

  tileViewModeClass : string;
  listViewModeClass : string;

  constructor(private ds : DataService,
              private router : Router,
              private route : ActivatedRoute,) 
  { 
    this.ds.sendMenuData("1-0");
  }

  ngOnInit() {
    this.route.params.subscribe(params => {this.specTypeID = params["id"];});
    this.route.params.subscribe(params => {this.keyword = params["keyword"];});

    if (this.keyword == "null")
      this.keyword = ""

    this.getSpecTypeList();
    
    this.search();
    this.setViewMode(2);
  }

  pageHandler(p : number) {
    
  }

  getSpecTypeList() {
    this.specTypeList = [];
    for (let i = 0; i < AppConfig.specTypeList.length; i++) {
      if (i == 0) {
        this.specTypeList.push("All");
      }
      else {
        this.specTypeList.push(AppConfig.specTypeList[i]);
      }
    }
  }

  search() {
    //search specTypeID, keyword

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
