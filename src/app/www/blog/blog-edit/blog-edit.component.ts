import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { AppConfig } from '../../../config/app.config';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

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
  screenImage : any;

  constructor(private ds : DataService,
              private router : Router,
              private route : ActivatedRoute) 
  { 
    this.ds.sendMenuData("3-2");
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
    //this.starClassList = ["clr-gray", "clr-gray", "clr-gray", "clr-gray", "clr-gray"];
    this.currentRate = this.blog.rate;

    this.rateClass = ""; this.titleClass = ""; this.contentClass = ""; this.typeClass = "";
    this.title = this.blog.title; 
    this.content = this.blog.content; 
    this.type = this.blog.type;
    this.screenImage = this.blog.screenImage;
  }

  getRecentBlogList() {
    //by specialId
    this.recentBlogList = [
      {
        id : 1,
        userId : 1,
        userImage : "assets/images/avatar.png",
        userName : "Steven Jim89",
        title : "Fabulous!!",
        content : "This specialization big and clear very. Cool!!!~",
        rate : 500
      },
      {
        id : 2,
        userId : 2,
        userImage : "assets/images/avatar.png",
        userName : "Hoslow Abe89",
        title : "Fabulous!!",
        content : "This specialization big and clear very. Cool!!!~",
        rate : 500
      },
      {
        id : 3,
        userId : 3,
        userImage : "assets/images/avatar.png",
        userName : "Hokion Skala",
        title : "Fabulous!!",
        content : "This specialization big and clear very. Cool!!!~",
        rate : 500
      },
      {
        id : 4,
        userId : 4,
        userImage : "assets/images/avatar.png",
        userName : "Yousoki Humua",
        title : "Fabulous!!",
        content : "This specialization big and clear very. Cool!!!~",
        rate : 500
      }
    ];
  }

  showChooseFileDlg() {

  }

  focusTitle() {
    this.titleClass = "stand";
  }

  blurTitle() {
    if (this.title == "") {
      this.titleClass = "err";
    }
    else {
      this.titleClass = "succ";
    }
  }

  focusContent() {
    this.contentClass = "stand";
  }

  blurContent() {
    if (this.content == "") {
      this.contentClass = "err";
    }
    else {
      this.contentClass = "succ";
    }
  }

  focusType() {
    this.typeClass = "stand";
  }

  blurType() {
    if (this.type == "") {
      this.typeClass = "err";
    }
    else {
      this.typeClass = "succ";
    }
  }

  changeType() {
    if (this.type == "") {
      this.typeClass = "err";
    }
    else {
      this.typeClass = "succ";
    }
  }

  submitBlog() {
    //this.title, this.content, this.type, this.currentRate;
  }

  slideRate(data) {
    this.rateScoreList[data.idx] = data.value;

    this.currentRate = 0;
    for (let i = 0; i < this.rateScoreList.length; i++) {
      this.currentRate += this.rateScoreList[i];
    }

    if (this.currentRate == 0) {
      this.rateClass = "err";
    } else {
      this.rateClass = "succ";
    }
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