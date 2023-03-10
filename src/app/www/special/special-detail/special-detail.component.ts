import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConfig } from '../../../config/app.config';
import { DataService } from '../../../shared/services/data.service';

declare var $ : any;
declare var google : any;

@Component({
  selector: 'app-special-detail',
  templateUrl: './special-detail.component.html',
  styleUrls: ['./special-detail.component.css']
})

export class SpecialDetailComponent implements OnInit {
  id : string;
  special : any;
  blogList : any;
  typeList : any;
  specTypeList : any;
  rateList : any;
  rateColorClassList : any;

  rateCheckedStatus : any;
  typeCheckedStatus : any;

  constructor(private route : ActivatedRoute, 
              private router : Router,
              private ds : DataService) {
    this.ds.sendMenuData("2-1");
  }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = params["id"];});
    
    this.getSpecialInfo();
    this.getBlogList();

    this.specTypeList = AppConfig.specTypeList;
    this.typeList = AppConfig.typeList;
    this.rateList = AppConfig.rateList;
    this.rateColorClassList = ["bg-clr-poor", "bg-clr-fair", "bg-clr-average", 
      "bg-clr-good", "bg-clr-excellent"];
      
    this.rateCheckedStatus = [];
    this.typeCheckedStatus = [];
    for (let i = 0; i < this.rateList.length; i++) {
      this.rateCheckedStatus.push("");
    }

    for (let i = 0; i < this.typeList.length; i++) {
      this.typeCheckedStatus.push("");
    }
    
    //google.maps.event.addDomListener(window, 'load', this.init_map);
    try {
      this.init_map();
    }
    catch (e) {

    }
    
    this.updateUI();

    /*$('#tumb_image').owlCarousel({
      loop: true,
      autoplay: true,
      items: 1,
      nav: true,
      autoplayHoverPause: true,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp'
    });*/
    
  }

  getSpecialInfo() {
    AppConfig.tempList.forEach(t => {
      if (this.id == t.id) {
        this.special = t;
        return;
      }
    });
  }

  getBlogList() {
    this.blogList = AppConfig.tempBlogList;
  }

  onResize(event) {
    this.updateUI();
  }

  updateUI() {
    setTimeout(function() {
      let big_img_height = $(".big-img").height();
      $(".small-img").css({height: big_img_height});

      /*$('#tumb_image').slick({
        autoplay: false,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        centerPadding: "10px",
        draggable: false,
        infinite: true,
        pauseOnHover: false,
        swipe: false,
        touchMove: true,
        vertical: true,
        speed: 1000,
        autoplaySpeed: 2000,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        adaptiveHeight: true,
      });*/

      if ($(".map-info").height() > $(".over-info").height()) {
        $(".map-info").css({height:$(".over-info").height() + 50});
      }
    }, 300);
  }

  init_map()
  {
    var myOptions = {
      zoom:14,
      center:new google.maps.LatLng(this.special.latitude , this.special.longitude),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    let map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
    let marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(9.072264, 7.491302	)
    });

    let infowindow = new google.maps.InfoWindow({
      content:"<b>The Abuja</b><br/>2880 Broadway<br/> Nigeria" });
      google.maps.event.addListener(marker, "click", function() {
          infowindow.open(map,marker);
      });

      infowindow.open(map,marker);
  }

  pageHandler(p : number) {
    
  };

  blogWrite(id : number) {
    this.router.navigate(["/blog","write", id]);
  }

  clickRate(idx : number) {
    if (this.rateCheckedStatus[idx] == "")
      this.rateCheckedStatus[idx] = "active";
    else
      this.rateCheckedStatus[idx] = "";
  }

  clickType(idx : number) {
    if (this.typeCheckedStatus[idx] == "")
      this.typeCheckedStatus[idx] = "active";
    else
      this.typeCheckedStatus[idx] = "";
  }

}
