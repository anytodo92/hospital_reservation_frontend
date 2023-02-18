import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../config/app.config';
import { DataService } from '../../../shared/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  blogId : number;
  blog : any;

  typeList : any;
  rateList : any;
  rateColorClassList : any;
  rateScoreList : any;
  currentRate : number;

  recentBlogList : any;

  rateClass : string;
  titleClass : string;
  contentClass : string;
  typeClass : string;

  title : string;
  content : string;
  type : string;

  constructor(private ds : DataService,
              private router : Router,
              private route : ActivatedRoute) 
  { 
    this.ds.sendMenuData("3-3");
  }

  ngOnInit() {
    this.route.params.subscribe(params => {this.blogId = params["id"];});

    this.getBlog();
    
    this.getRecentBlogList();

    this.typeList = AppConfig.typeList;
    this.rateList = AppConfig.rateList;
    this.rateColorClassList = ["bg-clr-poor", "bg-clr-fair", "bg-clr-average", 
      "bg-clr-good", "bg-clr-excellent"];
    this.rateScoreList = [0, 0, 0, 0, 0];
  }

  getRecentBlogList() {
    //by userId
    this.recentBlogList = [
      {
        id : 1,
        specialId : 1,
        specialImage : "assets/images/hospitals/thumnails/01.png",
        specialName : "Karu Customs Hospital",
        title : "Fabulous!!",
        content : "This specialization big and clear very. Cool!!!~",
        rate : 500
      },
      {
        id : 2,
        specialId : 2,
        specialImage : "assets/images/hospitals/thumnails/02.png",
        specialName : "IBOM SPECIALIST HOSPITAL",
        title : "Fabulous!!",
        content : "This specialization big and clear very. Cool!!!~",
        rate : 500
      },
      {
        id : 3,
        specialId : 3,
        specialImage : "assets/images/hospitals/thumnails/03.png",
        specialName : "Nigerian Turkish Nizamiye Hospital",
        title : "Fabulous!!",
        content : "This specialization big and clear very. Cool!!!~",
        rate : 500
      },
      {
        id : 4,
        specialId : 4,
        specialImage : "assets/images/hospitals/thumnails/04.png",
        specialName : "Kent hospital",
        title : "Fabulous!!",
        content : "This specialization big and clear very. Cool!!!~",
        rate: 500
      }
    ];
  }

  getBlog() {
    for (let i = 0; i < AppConfig.tempBlogList.length; i++) {
      if (this.blogId == AppConfig.tempBlogList[i].id) {
        this.blog = AppConfig.tempBlogList[i];
        break;
      }
    }
  }

}
