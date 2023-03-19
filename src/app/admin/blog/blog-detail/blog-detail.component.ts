import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { AppConfig } from '../../../config/app.config';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id : number;

  blog : any;
  typeList : any;

  constructor(private ds : DataService,
              private route : ActivatedRoute) 
  { 
    this.ds.sendAdminMenuData("3-1");
  }

  ngOnInit() {
    this.route.params.subscribe(params => { this.id = params["id"]; });

    this.typeList = AppConfig.typeList;
    
    this.getBlogInfo();
  }

  getBlogInfo() {
    for (let i = 0; i < AppConfig.tempBlogList.length; i++) {
      if (this.id == AppConfig.tempBlogList[i].id) {
        this.blog = AppConfig.tempBlogList[i];
        break;
      }
    }
  }

  back() {
    history.back();
  }
}
