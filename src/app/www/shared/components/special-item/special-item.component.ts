import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'app-special-item',
  templateUrl: './special-item.component.html',
  styleUrls: ['./special-item.component.css']
})
export class SpecialItemComponent implements OnInit {
  @Input("special") special : any;
  @Input("viewMode") viewMode : number;
  @Input("mine") mine : boolean;

  @Output("deleteHandler") deleteHandler : EventEmitter<number> = new EventEmitter<number>();
  @Output("editHandler") editHandler : EventEmitter<number> = new EventEmitter<number>();
  
  _desc : string;
  _status : string;

  statusClass : string;

  constructor(private router : Router,
              private ds : DataService) 
  {
    this.ds.getSpecialViewModeStatus().subscribe(x => {
      this.viewMode = x;
      this.updateUI();
    });
  }

  ngOnInit() {
    this.updateUI();
  }

  updateUI() {
    if (this.special.status == 0) {
      this._status = "Pending";
      this.statusClass = "label-warning";
    }
    else {
      this._status = "Approved";
      this.statusClass = "label-success";
    }

    if (this.viewMode == 2)
      this._desc = this.substring(this.special.desc, 70);
    else 
      this._desc = this.special.desc;
  }

  substring(str : string, len : number) {
    let s = 0;
    for (let i = 0; i < str.length; i++) 
    {
        s += (str.charCodeAt(i) > 128) ? 2 : 1;
        if (s > len) return str.substring(0, i) + "...";
    } 
    
    return str;
  }

  goSpecialDetail(id : number) {
    this.router.navigate(["/special", "detail", id]);
  }

  deleteSpecial(id : number) {
    this.deleteHandler.emit(id);
  }

  editSpecial(id : number) {
    this.editHandler.emit(id);
  }

}
