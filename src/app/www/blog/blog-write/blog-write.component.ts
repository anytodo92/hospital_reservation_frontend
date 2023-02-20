import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppConfig } from '../../../config/app.config';
import { DataService } from '../../../shared/services/data.service';

declare var $ : any;

@Component({
  selector: 'app-blog-write',
  templateUrl: './blog-write.component.html',
  styleUrls: ['./blog-write.component.css']
})
export class BlogWriteComponent implements OnInit {

  specialId : string;
  special : any;
  recentBlogList : any;
  
  typeList : any;
  rateList : any;
  
  //starClassList : any;
  currentRate : number;
  rateScoreList : any;
  rateColorClassList : any;

  rateClass : string;
  titleClass : string;
  contentClass : string;
  typeClass : string;

  title : string;
  content : string;
  type : string;
  screenImage : any;

  constructor(private route : ActivatedRoute,
              private ds : DataService) {
    this.ds.sendMenuData("2-2");
  }

  ngOnInit() {
    this.route.params.subscribe(params => {this.specialId = params["id"];});

    this.getSpecialInfo();
    this.getRecentBlogList();

    this.typeList = AppConfig.typeList;
    this.rateList = AppConfig.rateList;
    this.rateColorClassList = ["bg-clr-poor", "bg-clr-fair", "bg-clr-average", 
      "bg-clr-good", "bg-clr-excellent"];
    this.rateScoreList = [0, 0, 0, 0, 0];
    //this.starClassList = ["clr-gray", "clr-gray", "clr-gray", "clr-gray", "clr-gray"];
    this.currentRate = 0;

    this.rateClass = ""; this.titleClass = ""; this.contentClass = ""; this.typeClass = "";
    this.title = ""; this.content = ""; this.type = ""; this.screenImage = ["", "", ""];
  }

  getSpecialInfo() {
    AppConfig.tempList.forEach(t => {
      if (this.specialId == t.id) {
        this.special = t;
        return;
      }
    });
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

  /*overStar(idx : number) {
    if (this.currentRate == -1) 
      this.rateClass = "stand";

    for (let i = 0; i < this.starClassList.length; i++) {
      if (i <= idx)
        this.starClassList[i] = "clr-primary";
    }

    this.currentRateText = AppConfig.rateList[idx];
  }

  leaveStar(idx : number) {
    for (let i = 0; i < this.starClassList.length; i++) {
      if (i <= this.currentRate)
        this.starClassList[i] = "clr-primary";
      else 
        this.starClassList[i] = "clr-gray";
    }

    if (this.currentRate == -1) {
      this.currentRateText = "Click to rate";
      this.rateClass = "err";
    }
    else {
      this.currentRateText = AppConfig.rateList[this.currentRate];
    }
  }

  selectStar(idx : number) {
    this.currentRate = idx;
    for (let i = 0; i < this.starClassList.length; i++) {
      if (i <= this.currentRate)
        this.starClassList[i] = "clr-primary";
      else 
        this.starClassList[i] = "clr-gray";
    }
    this.rateClass = "succ";
  }*/

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
}
