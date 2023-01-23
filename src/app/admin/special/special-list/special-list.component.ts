import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../../shared/services/data.service';
import { AppConfig } from '../../../config/app.config';

declare var swal : any;
declare var toastr : any;
declare var $ : any;

@Component({
  selector: 'app-special-list',
  templateUrl: './special-list.component.html',
  styleUrls: ['./special-list.component.css']
})
export class SpecialListComponent implements OnInit {

  keyword : string;
  beginDate : string;
  endDate : string;

  specialList : any;

  constructor(private ds : DataService,
              private router : Router) 
  { 
    
  }

  ngOnInit() {
    this.ds.sendAdminMenuData("2-0");

    $("#begin_date").datepicker();
    $("#end_date").datepicker();

    this.search();
  }

  search() {
    this.specialList = AppConfig.tempList;
  }

  pageHandler() {

  }

  deleteSpecial(id : number) {
    let special;
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

  editSpecial(id : number) {
    this.router.navigate(["/admin", "special", "edit", id]);
  }

  createSpecial() {
    this.router.navigate(["/admin", "special", "create"]);
  }

}
