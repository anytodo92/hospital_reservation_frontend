import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var $ : any;

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent implements OnInit {

  @Input('rate') rate : string;
  @Input('fontSize') fontSize : string;

  style_ : any;
  rate_ : number;

  constructor(private sanitizer : DomSanitizer) { 
    
  }

  ngOnInit() {
    
    let tmp = "font-size:" + (parseInt(this.fontSize, 10) / 10) + "rem";
    this.rate_ = Math.floor(parseFloat(this.rate) / 100) * 10 ;
    this.style_ = this.sanitizer.bypassSecurityTrustStyle(tmp);
  }

}
