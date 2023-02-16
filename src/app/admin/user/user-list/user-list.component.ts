import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { AppConfig } from '../../../config/app.config';

declare var swal : any;
declare var toastr : any;
declare var $ : any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  keyword : string;
  beginDate : string;
  endDate : string;
  
  userList : any;

  constructor(private ds : DataService) 
  { 

  }

  ngOnInit() {
    this.ds.sendAdminMenuData("4-0");

    $("#begin_date").datepicker();
    $("#end_date").datepicker();

    this.search();
  }

  search() {
    this.userList = AppConfig.tempUserList;
  }

  pageHandler(pate : number) {

  }

  deleteUser(id : number) {
    let user;
    for (let i = 0; i < this.userList.length; i++) {
      if (id == this.userList[i].id) {
        user = this.userList[i];
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
        
      toastr.success("Deleted successfully!", user.name, {
        "timeOut": "2000",
        "extendedTimeOut": "1000"
      });

    });
  }

}
