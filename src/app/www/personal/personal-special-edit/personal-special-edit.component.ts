import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../config/app.config';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-personal-special-edit',
  templateUrl: './personal-special-edit.component.html',
  styleUrls: ['./personal-special-edit.component.css']
})
export class PersonalSpecialEditComponent implements OnInit {

  id : number;
  special : any;

  specTypeList : any;

  nameClass : string;
  specTypeClass : string;
  smallImageClass : string;
  bigImageClass : string;
  screenImageClass : string;
  urlClass : string;
  locationClass : string;
  longitudeClass : string;
  latitudeClass : string;
  telClass : string;
  descClass : string;

  name : string;
  specType : string;
  smallImage : string;
  bigImage : string;
  screenImage : any;
  url : string;
  location : string;
  longitude : string;
  latitude : string;
  tel : string;
  desc : string;

  constructor(private ds : DataService,
              private route : ActivatedRoute) 
  { 
    this.ds.sendAdminMenuData("3-3-2");
  }

  ngOnInit() {

    this.route.params.subscribe(params => { this.id = params["id"] });
    
    this.nameClass = ""; this.specTypeClass = ""; 
    this.smallImageClass = ""; this.bigImageClass = ""; this.screenImageClass = "";
    this.urlClass = ""; this.locationClass = ""; this.telClass = "";
    this.descClass = "";

    this.name = ""; this.specType = "";
    this.smallImage = ""; this.bigImage = ""; this.screenImage = ["", "", "", ""];
    this.url = ""; this.location = ""; this.tel = "";
    this.desc = ""; this.longitude = ""; this.latitude = "";

    this.getSpecialInfo();
    this.getSpecTypeList();
  }

  getSpecialInfo() {
    for (let i = 0; i < AppConfig.tempList.length; i++) {
      if (this.id == AppConfig.tempList[i].id) {
        this.special = AppConfig.tempList[i];
        this.name = this.special.name;
        this.specType = this.special.type;
        //this.bigImage = this.special.bigImage;
        //this.smallImage = this.special.smallImage;
        //this.screenImage = this.special.thumbs;
        this.url = this.special.url;
        this.location = this.special.location;
        this.longitude = this.special.longitude;
        this.latitude = this.special.latitude;
        this.tel = this.special.tel;
        this.desc = this.special.desc;
        break;
      }
    }
  }
  
  getSpecTypeList() {
    this.specTypeList = [];
    for (let i = 0; i < AppConfig.specTypeList.length; i++) {
      if (i == 0)
        continue;
      this.specTypeList.push(AppConfig.specTypeList[i]);
    }
  }

  checkName() {
    if (this.name == "") {
      this.nameClass = "active";
      return false;
    }

    this.nameClass = "";
    return true;
  }

  checkSpecType() {
    if (this.specType == "") {
      this.specTypeClass = "active";
      return false;
    }

    this.specTypeClass = "";
    return true;
  }

  checkSmallImage() {
    if (this.smallImage == "") {
      this.smallImageClass = "active";
      return false;
    }

    this.smallImageClass = "";
    return true;
  }

  checkBigImage() {
    if (this.bigImage == "") {
      this.bigImageClass = "active";
      return false;
    }

    this.bigImageClass = "";
    return true;
  }

  checkScreenImage() {
    let bl = false;
    for (let i = 0; i < this.screenImage.length; i++) {
      if (this.screenImage[i] != "")
      {
        bl = true;
        break;
      }
    }
    
    if (bl) {
      this.screenImageClass = "";
    } else {
      this.screenImageClass = "active";
    }

    return bl;
  }

  checkUrl() {
    if (this.url == "") {
      this.urlClass = "active";
      return false;
    }
    
    this.urlClass = "";
    return true;
  }

  checkLocation() {
    if (this.location == "") {
      this.locationClass = "active";
      return false;
    }

    this.locationClass = "";
    return true;
  }

  checkLongitude() {
    if (this.longitude == "") {
      this.longitudeClass = "active";
      return false;
    }

    this.longitudeClass = "";
    return true;
  }

  checkLatitude() {
    if (this.latitude == "") {
      this.latitudeClass = "active";
      return false;
    }

    this.latitudeClass = "";
    return true;
  }

  checkTel() {
    if (this.tel == "") {
      this.telClass = "active";
      return false;
    }

    this.telClass = "";
    return true;
  }

  checkDesc() {
    if (this.desc == "") {
      this.descClass = "active";
      return false;
    }

    this.descClass = "";
    return true;
  }

  save() {
    let bl = false;
    bl = this.checkName();
    bl = this.checkSpecType();
    bl = this.checkSmallImage();
    bl = this.checkBigImage();
    bl = this.checkScreenImage();
    bl = this.checkUrl();
    bl = this.checkLocation();
    bl = this.checkLongitude();
    bl = this.checkLatitude();
    bl = this.checkTel();
    bl = this.checkDesc();
  }

  back() {
    history.back();
  }

}
