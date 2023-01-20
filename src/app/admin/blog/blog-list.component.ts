import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { AppConfig } from '../../../config/app.config';

declare var swal : any;
declare var toastr : any;
declare var $ : any;

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  typeList : any;
  blogList : any;

  keyword : string;
  beginDate : string;
  endDate : string;

  constructor(private ds : DataService) 
  { 
    
  }

  ngOnInit() {
    this.ds.sendAdminMenuData("3-0");

    $("#begin_date").datepicker();
    $("#end_date").datepicker();

    this.typeList = AppConfig.typeList;
    this.search();
  }

  pageHandler(page : number) {

  }

  search() {
    this.blogList = AppConfig.tempBlogList;
  }

  deleteBlog(id : number) {
    let blog;
    for (let i = 0; i < this.blogList.length; i++) {
      if (id == this.blogList[i].id) {
        blog = this.blogList[i];
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
        
      toastr.success("Deleted successfully!", blog.title, {
        "timeOut": "2000",
        "extendedTimeOut": "1000"
      });

    });
  }

}
