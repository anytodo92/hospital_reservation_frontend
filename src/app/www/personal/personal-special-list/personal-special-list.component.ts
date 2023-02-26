import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { AppConfig } from '../../../config/app.config';
import { Router } from '@angular/router';

declare var swal : any;
declare var toastr : any;

@Component({
  selector: 'app-personal-special-list',
  templateUrl: './personal-special-list.component.html',
  styleUrls: ['./personal-special-list.component.css']
})
export class PersonalSpecialListComponent implements OnInit {

  specialList : any;
  specTypeList : any;
  specTypeClassList : any;

  viewMode : number;

  tileViewModeClass : string;
  listViewModeClass : string;

  currentTab : number;

  constructor(private ds : DataService,
              private router : Router) 
  {
    this.ds.sendMenuData("3-3");
  }

  ngOnInit() {
    this.getSpecTypeList();
    
    this.getSpecialList(0);

    this.setViewMode(2);
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

  getSpecialList(tab) {
    this.currentTab = tab;

    for (let i = 0; i < this.specTypeClassList.length; i++) {
      if (i == tab) {
        this.specTypeClassList[i] = "active";
      }
      else {
        this.specTypeClassList[i] = "";
      }
    }

    this.specialList = AppConfig.tempList;
    /*for (let i = 0; i < AppConfig.tempList.length; i++) {
      if (AppConfig.tempList[i].status == 1)
        this.specialList.push(AppConfig.tempList[i]);
    }*/
  }

  pageHandler(page : number) {

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
    this.ds.sendSpecialViewModeStatus(mode);
  }

  editSpecial(id) {
    this.router.navigate(["/personal", "special", "edit", id]);
  }

  deleteSpecial(id) {
    let special : any;
    
    for (let i = 0; i < this.specialList.length; i++) {
      if (id == this.specialList[i].id) {
        special = this.specialList[i];
        break;
      }
    }

    swal({
      title: "Do you delete really?",
      text: "This action can't back...",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF5350",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      closeOnConfirm: true,
      closeOnCancel: true
    }, function(isConfirm) {
      if (!isConfirm)
        return;
        
      toastr.success("Deleted successfully!", special.name, {
        "timeOut": "2000",
        "extendedTimeOut": "1000"
      });

    });
  }

  createSpecial() {
    this.router.navigate(["/personal", "special", "create"]);
  }

}
