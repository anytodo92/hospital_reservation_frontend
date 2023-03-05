import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input('total') total : number;
  @Input('count') count : number;
  @Input('label') label : string;
  @Input('ratioLB') ratioLB : string;

  ratio : any;
  style_ : any;

  constructor(private santizer : DomSanitizer) { }

  ngOnInit() {
    this.ratio = Math.floor((this.count / this.total) * 1000);
    this.ratio = this.ratio / 10;

    /* [ngStyle] = "style_"
    this.style_ = {
      width : this.ratio + '%'
    };*/

    this.style_ = this.santizer.bypassSecurityTrustStyle("width:" + this.ratio + "%");
  }

}
