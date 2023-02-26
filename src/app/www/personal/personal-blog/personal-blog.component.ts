import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { AppConfig } from '../../../config/app.config';

declare var swal : any;
declare var toastr : any;

@Component({
  selector: 'app-personal-blog',
  templateUrl: './personal-blog.component.html',
  styleUrls: ['./personal-blog.component.css']
})
export class PersonalBlogComponent implements OnInit {

  blogList : any;

  constructor(private ds : DataService,
              private router : Router) 
  {
    this.ds.sendMenuData("3-2");
  }

  ngOnInit() {
    this.blogList = [];
    this.getBlogList();
  }

  getBlogList() {
    this.blogList = AppConfig.tempBlogList;
  }

  deleteBlog(id : number) {
    let blog : any;
    
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
        "timeOut": "1000",
        "extendedTimeOut": "100000"
      });
    });
  }

  editBlog(id : number) {
    let specialId = 0;
    for (let i = 0; i < this.blogList.length; i++) {
      let blog = this.blogList[i];
      if (id == blog.id) {
        specialId = blog.specialId;
        break;
      }
    }
    this.router.navigate(["/blog", "edit", id]);
  }

  pageHandler(page : number) {
    
  }

}
