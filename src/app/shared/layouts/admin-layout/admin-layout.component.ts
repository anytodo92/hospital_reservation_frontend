import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

declare var $ : any;

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  dashBoardMenuClass : string;
  specialMenuClass : string;
  blogMenuClass : string;
  userMenuClass : string;
  activityMenuClass : string;
  settingMenuClass : string;

  navBtnClass : string;
  wrapperClass : string;

  showSideMenu : boolean;

  constructor(private ds : DataService) {
    this.ds.getAdminMenuData().subscribe(x => {
      let arr = x.split("-");
      let tag = parseInt(arr[0], 10);
      
      if (tag == 1) {
        this.dashBoardMenuClass = "active";
        this.specialMenuClass = "";
        this.blogMenuClass = "";
        this.userMenuClass = "";
        this.activityMenuClass = "";
        this.settingMenuClass = "";
      }
      else if (tag == 2) {
        this.dashBoardMenuClass = "";
        this.specialMenuClass = "active";
        this.blogMenuClass = "";
        this.userMenuClass = "";
        this.activityMenuClass = "";
        this.settingMenuClass = "";
      }
      else if (tag == 3) {
        this.dashBoardMenuClass = "";
        this.specialMenuClass = "";
        this.blogMenuClass = "active";
        this.userMenuClass = "";
        this.activityMenuClass = "";
        this.settingMenuClass = "";
      } 
      else if (tag == 4) {
        this.dashBoardMenuClass = "";
        this.specialMenuClass = "";
        this.blogMenuClass = "";
        this.userMenuClass = "active";
        this.activityMenuClass = "";
        this.settingMenuClass = "";
      } 
      else if (tag == 5) {
        this.dashBoardMenuClass = "";
        this.specialMenuClass = "";
        this.blogMenuClass = "";
        this.userMenuClass = "";
        this.activityMenuClass = "active";
        this.settingMenuClass = "";
      } 
      else if (tag == 6) {
        this.dashBoardMenuClass = "";
        this.specialMenuClass = "";
        this.blogMenuClass = "";
        this.userMenuClass = "";
        this.activityMenuClass = "";
        this.settingMenuClass = "active";
      } 
    });
  }

  ngOnInit() {
    $("body").css({"background-color":"#f5f5fa"});
    
    this.navBtnClass = "fa-arrow-left";
    this.wrapperClass = "";
    this.showSideMenu = true;
  }

  toggleMenu() {
    if(this.showSideMenu) {
      this.wrapperClass = "layout-fullwidth";
      this.navBtnClass = "fa-arrow-right";
      this.showSideMenu = false;
		} else {
      this.wrapperClass = "";
      this.navBtnClass = "fa-arrow-left";
      this.showSideMenu = true;
		}

		/*if($(window).innerWidth() < 1025) {
			if(!$('#wrapper').hasClass('offcanvas-active')) {
				$('#wrapper').addClass('offcanvas-active');
			} else {
				$('wrapper').removeClass('offcanvas-active');
			}
		}*/
  }

}
