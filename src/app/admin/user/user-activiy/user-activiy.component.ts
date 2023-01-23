import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { AppConfig } from '../../../config/app.config';

declare var swal : any;
declare var toastr : any;
declare var $ : any;

@Component({
  selector: 'app-user-activiy',
  templateUrl: './user-activiy.component.html',
  styleUrls: ['./user-activiy.component.css']
})
export class UserActiviyComponent implements OnInit {

  activityList : any;
  keyword : string;
  beginDate : string;
  endDate : string;

  constructor(private ds : DataService) 
  { 

  }

  ngOnInit() {
    this.ds.sendAdminMenuData("5-0");

    $("#begin_date").datepicker();
    $("#end_date").datepicker();

    this.search();
  }

  search() {
    this.activityList = AppConfig.tempActivityList;
  }

  pageHandler(page : number) {

  }

  deleteActivity(id : number) {
    let activity;
    for (let i = 0; i < this.activityList.length; i++) {
      if (id == this.activityList[i].id) {
        activity = this.activityList[i];
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
        
      toastr.success("Deleted successfully!", {
        "timeOut": "2000",
        "extendedTimeOut": "1000"
      });

    });
  }

}
