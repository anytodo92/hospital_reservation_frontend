import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AppConfig } from '../../../../config/app.config';

declare var $ : any;

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {

  constructor(private santizer : DomSanitizer,
              private router : Router) 
  { 

  }

  showBackdrop : boolean;
  typeListClass : string;
  searchListClass : string;
  typeList : any;
  searchResultList : any;
  currentTypeID : number;
  currentType : string;
  searchPanelStyle : any;
  searchKeyword : string;
  
  ngOnInit() {
    this.typeListClass = "";
    this.typeList = AppConfig.specTypeList;
    
    this.searchResultList = [
      {
        name : "Abuja",
        location : "Nigeria, Africa"
      },
      {
        name : "InterContinental Abuja Dhabi",
        location : "Abuja Dhabi"
      },
      {
        name : "Hilton Abuja Dhabi",
        location : "Abuja Dahbi"
      }
    ];

    this.searchKeyword = "";
    this.searchListClass = "";

    this.currentType = "--";
    this.currentTypeID = 0;

    this.bannerInit();

    let obj_ = this;
    setTimeout(function () {
      obj_.updateUI();
    }, 100);
    
  }

  bannerInit() {
    $('#main_slider').flexslider({
      namespace           : "flex-",           //{NEW} String: Prefix string attached to the class of every element generated by the plugin
      selector            : ".slides > li",    //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
      animation           : "fade",            //String: Select your animation type, "fade" or "slide"
      easing              : "swing",           //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
      direction           : "horizontal",      //String: Select the sliding direction, "horizontal" or "vertical"
      reverse             : false,             //{NEW} Boolean: Reverse the animation direction
      animationLoop       : true,              //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
      smoothHeight        : false,             //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
      startAt             : 0,                 //Integer: The slide that the slider should start on. Array notation (0 = first slide)
      slideshow           : true,              //Boolean: Animate slider automatically
      slideshowSpeed      : 5000,              //Integer: Set the speed of the slideshow cycling, in milliseconds
      animationSpeed      : 600,               //Integer: Set the speed of animations, in milliseconds
      initDelay           : 0,                 //{NEW} Integer: Set an initialization delay, in milliseconds
      randomize           : false,             //Boolean: Randomize slide order
      
      // Usability features
      pauseOnAction       : true,              //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
      pauseOnHover        : false,             //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
      useCSS              : true,              //{NEW} Boolean: Slider will use CSS3 transitions if available
      touch               : true,              //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
      video               : false,             //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
      
      // Primary Controls
      controlNav          : true,              //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
      directionNav        : false,              //Boolean: Create navigation for previous/next navigation? (true/false)
      prevText            : "Previous",        //String: Set the text for the "previous" directionNav item
      nextText            : "Next",            //String: Set the text for the "next" directionNav item
      
      // Secondary Navigation
      keyboard            : true,              //Boolean: Allow slider navigating via keyboard left/right keys
      multipleKeyboard    : false,             //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
      mousewheel          : false,             //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
      pausePlay           : false,             //Boolean: Create pause/play dynamic element
      pauseText           : 'Pause',           //String: Set the text for the "pause" pausePlay item
      playText            : 'Play',            //String: Set the text for the "play" pausePlay item
      
      // Special properties
      controlsContainer   : "",                //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
      manualControls      : "",                //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
      sync                : "",                //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
      asNavFor            : "",                //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
    });
  }
  
  clickSelect() {
    if (this.typeListClass == "")
    {
      this.typeListClass = "open";
      this.showBackdrop = true;
    } else {
      this.typeListClass = "";
      this.showBackdrop = false;
    }
  }

  clickBackdrop() {
    this.typeListClass = "";
    this.searchListClass = "";
    this.showBackdrop = false;
  }

  clickType(idx : number) {
    this.currentTypeID = idx;
    this.currentType = this.typeList[this.currentTypeID];
  }

  searchNameOrLocation() {
    
    if (this.searchKeyword == "")
      return;

    this.searchListClass = "open";
    this.showBackdrop = true;
  }

  onResize(event) {
    $(".search-panel").hide();
    let obj_ = this;
    setTimeout(function () {
      obj_.updateUI();
    }, 100);
  }

  updateUI() {
    let obj_ = this;
    let top = $("#main_slider").height() / 2 - $(".search-panel").height() / 2;
    if (top > 0) {
      //this.searchPanelStyle = this.santizer.bypassSecurityTrustStyle("top:" + top + "px");
      $(".search-panel").css({"top" : top + "px"});
      $(".search-panel").show();
    }
    else {
      setTimeout(function () {
        obj_.updateUI();
      }, 100)
    }
  }

  find() {
    if (this.searchKeyword == "")
      this.router.navigate(["/search", this.currentTypeID, "null"]);
    else
      this.router.navigate(["/search", this.currentTypeID, this.searchKeyword]);
  }

}
