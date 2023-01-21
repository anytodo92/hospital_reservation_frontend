import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { AppConfig } from '../../config/app.config';

declare var Chartist : any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  specCount : string;
  blogCount : string;
  userCount : string;
  activityCount : string;

  specialList : any;
  blogList : any;
  userList : any;
  activityList : any;

  typeList : any;

  constructor(private ds : DataService) 
  { 
    
  }

  ngOnInit() {
    this.ds.sendAdminMenuData("1-0");

    this.typeList = AppConfig.typeList;
    
    this.getTotalOverView();
    this.getTopSpecialList();
    this.getRecentBlogList();
    this.getRecentUserList();
    this.getRecentActivityList();
    this.visitCharts();
  }

  getTotalOverView() {
    this.specCount = "1,252";
    this.blogCount = "3,203";
    this.userCount = "274,678";
    this.activityCount = "1,356";
  }

  getTopSpecialList() {
    this.specialList = AppConfig.tempList;
  }

  getRecentBlogList() {
    this.blogList = AppConfig.tempBlogList;
  }

  getRecentUserList() {
    this.userList = AppConfig.tempUserList;
  }

  getRecentActivityList() {
    this.activityList = AppConfig.tempActivityList;
  }

  visitCharts() {
    let data = {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			series: [{
				name: 'series-real',
				data: [200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 750, 900],
			}, {
				name: 'series-projection',
				data: [240, 350, 360, 380, 400, 450, 480, 523, 555, 600, 700, 800],
			}]
		};

		let options = {
			fullWidth: true,
			lineSmooth: false,
			height: "270px",
			low: 0,
			high: 'auto',
			series: {
				'series-projection': {
					showArea: true,
					showPoint: false,
					showLine: false
				},
			},
			axisX: {
				showGrid: false,

			},
			axisY: {
				showGrid: false,
				onlyInteger: true,
				offset: 0,
			},
			chartPadding: {
				left: 20,
				right: 20
			}
		};

		new Chartist.Line("#visits_chart", data, options);
  }

}
