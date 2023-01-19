import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
declare var $ : any;

@Component({
  selector: 'app-www-layout',
  templateUrl: './www-layout.component.html',
  styleUrls: ['./www-layout.component.css']
})

export class WwwLayoutComponent implements OnInit {
  selectedMenu : number;
  homeMenuClass : string;
  specialMenuClass : string;
  personalMenuClass : string;

  showLeftMenu : boolean;

  constructor(private ds : DataService) { 
    this.ds.getMenuData().subscribe(x => {
      let arr = x.split("-");
      let tag = parseInt(arr[0], 10);
      
      if (tag == 1) {
        this.homeMenuClass = "active";
        this.specialMenuClass = "";
        this.personalMenuClass = "";
      }
      else if (tag == 2) {
        this.homeMenuClass = "";
        this.specialMenuClass = "active";
        this.personalMenuClass = "";
      }
      else if (tag == 3) {
        this.homeMenuClass = "";
        this.specialMenuClass = "";
        this.personalMenuClass = "active";
      } 

    });
  } 

  ngOnInit() {
    this.showLeftMenu = false;
  }

  modalLogin() {
    $("#modal_login").modal();
  }

  modalReg() {
    $( "#modal_register").modal();
  }

  collapseLeftMenu () {
    if (!$(".btn1.btn-site-menu").is(":visible")) {
      return;
    }
  
    if (!this.showLeftMenu) {
      $(".navbar-collapse").collapse("show");
      $("#mobile_nav_close").show();
      $("#mobile_nav_close").collapse("show");
      this.showLeftMenu = true;
    }
    else {
      $(".navbar-collapse").collapse("hide");
      $("#mobile_nav_close").hide();
      $("#mobile_nav_close").collapse("hide");
      this.showLeftMenu = false;
    }
  }

}
