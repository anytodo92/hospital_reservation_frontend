import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare var $ : any;

@Component({
  selector: 'app-rating-slidebar',
  templateUrl: './rating-slidebar.component.html',
  styleUrls: ['./rating-slidebar.component.css']
})
export class RatingSlidebarComponent implements OnInit {

  currentRate : number;
  rateSliderStyle : any;
  backgroundColorCss : string;
  slideClass : string;

  @Input("label") label : string;
  @Input("index") index : number;
  @Input("value") value : number;
  @Input("slide") slide : boolean;
  
  @Output("slideHandler") slideHandler : EventEmitter<any> = new EventEmitter<any>();

  constructor(private sanitizer : DomSanitizer) {

  }

  ngOnInit() {
    this.currentRate = this.value;
    this.backgroundColorCss = "";
    let obj_ = this;
    if (!this.slide) {
      this.slideClass = "disabled";
    }
    else {
      this.slideClass = "";
    }

    $($(".slide-bdy").get(this.index)).slider(
      {
        max : 100,
        min : 0,
        step : 1,
        value : obj_.currentRate,
        create : function (event, ui) {
          obj_.rateSliderStyle = obj_.sanitizer.bypassSecurityTrustStyle("width:0");
          obj_.drawBar();
        }
      }
    );

    if (this.slide) {
      $($(".slide-bdy").get(this.index)).on("slide", function (event, ui) {
        obj_.currentRate = ui.value;
        obj_.drawBar();
        obj_.slideHandler.emit({idx : obj_.index, value : obj_.currentRate});
      });
      
    }
  }

  drawBar() {
    this.rateSliderStyle = this.sanitizer.bypassSecurityTrustStyle("width:" + this.currentRate + "%");
    
    if (this.currentRate >=1 && this.currentRate <= 20) {
      this.backgroundColorCss = "bg-clr-poor";
    }
    else if (this.currentRate >= 21 && this.currentRate <= 40) {
      this.backgroundColorCss = "bg-clr-fair";
    }
    else if (this.currentRate >= 41 && this.currentRate <= 60) {
      this.backgroundColorCss = "bg-clr-average";
    }
    else if (this.currentRate >= 61 && this.currentRate <= 80) {
      this.backgroundColorCss = "bg-clr-good";
    }
    else if (this.currentRate >= 81 && this.currentRate <= 100) {
      this.backgroundColorCss = "bg-clr-excellent";
    }
  }
}
