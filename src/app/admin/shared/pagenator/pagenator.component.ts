import { Component, OnInit, Input } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-pagenator',
  templateUrl: './pagenator.component.html',
  styleUrls: ['./pagenator.component.css']
})

export class PagenatorComponent implements OnInit {

  @Input('page') page : number;
  @Input('callback') callback : Function;
  @Input('total') total : number;
  
  pageItemList : any;
  showCount = 10;

  constructor() { }

  ngOnInit() {
      this.pageItemList = [];

      let start = 1, l_idx = 0;
      let r_idx = 0, end = this.total;
      
      if (this.page - 2 > 0) 
          start = this.page - 2;
      else 
          l_idx = Math.abs(this.page - 3);
      
      if (this.page + 3 <= this.total) {
          end = this.page + 3;
          if (end + l_idx <= this.total)
              end += l_idx;
          else
              end = this.total; 
      }
      else {
          r_idx = (this.page + 3) - this.total;
          if (l_idx > 0) {
              end = this.total;
          } 
          else
          {
              if (start - r_idx > 0)
                  start -= r_idx;
              else
                  start = 1; 
          } 
      }

      for (var i = start; i <= end; i++)
      {
        this.pageItemList.push(i);
      }
        
      /*var arr = [10, 20, 30, 40, 50];
      html += '<select class="pull-left page-show-count ml-10">';
      for (var i = 0; i < arr.length; i++) {
          var selected = (arr[i] == showCount) ? "selected" : "";
          html += '<option value="' + arr[i] +'" ' + selected + '>' + arr[i] + '</option>';
      }
      html += '</select>';
      html += '</div></div>';
      
      $("#" + container).html(html);
      
      $("#" + container + " .page-show-count").change(function () {
          var showPerPageCount = $(this).val();
          showPageCountCallback(showPerPageCount);
      });*/ 
  }

  go(p) {
    //this.callback.apply(this, [page - 1]);
    if (this.page == p)
      return;
    this.callback(p);
  }

}
