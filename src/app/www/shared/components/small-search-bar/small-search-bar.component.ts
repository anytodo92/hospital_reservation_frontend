import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-small-search-bar',
  templateUrl: './small-search-bar.component.html',
  styleUrls: ['./small-search-bar.component.css']
})
export class SmallSearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".app-bar .btn-site-search1").click(function () {
      if ($(".search-bar").is(":visible")) {
        $(".search-bar").hide();
        $(".app-bar .btn-site-search1").html("Search");
      }
      else {
        $(".search-bar").show();
        $(".app-bar .btn-site-search1").html("Cancel");
      }
    }); 
  
    $("#site_search").bind({
      focus : function () {
        $(".search-bar").addClass("active-search");
      },
      blur : function () {
        $(".search-bar").removeClass("active-search");
      }
    });
  }

}
