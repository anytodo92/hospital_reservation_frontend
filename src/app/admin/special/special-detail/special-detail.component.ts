import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../config/app.config';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-special-detail',
  templateUrl: './special-detail.component.html',
  styleUrls: ['./special-detail.component.css']
})
export class SpecialDetailComponent implements OnInit {

  id : number;
  special : any;

  specTypeList : any;

  constructor(private ds : DataService,
              private route : ActivatedRoute) 
  { 
    this.ds.sendAdminMenuData("2-3");
  }

  ngOnInit() {

    this.route.params.subscribe(params => { this.id = params["id"] });
    
    this.getSpecialInfo();
    this.getSpecTypeList();
  }

  getSpecialInfo() {
    for (let i = 0; i < AppConfig.tempList.length; i++) {
      if (this.id == AppConfig.tempList[i].id) {
        this.special = AppConfig.tempList[i];
        break;
      }
    }
  }
  
  getSpecTypeList() {
    this.specTypeList = [];
    for (let i = 0; i < AppConfig.specTypeList.length; i++) {
      if (i == 0)
        continue;
      this.specTypeList.push(AppConfig.specTypeList[i]);
    }
  }


  back() {
    history.back();
  }

}
