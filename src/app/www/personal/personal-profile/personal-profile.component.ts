import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {

  nameClass : string;
  emailClass : string;
  locationClass : string;
  stateClass : string;
  cityClass : string;

  name : string;
  email : string;
  location : string;
  state : string;
  city : string;

  constructor(private ds : DataService) {
    this.ds.sendMenuData("3-0");
  }

  ngOnInit() {
    this.nameClass = "";
    this.emailClass = "";
    this.locationClass = "";
    this.stateClass = "";
    this.cityClass = "";

    this.name = ""; this.email = ""; this.location = "";
    this.city = ""; this.state = "";
  }

  checkName () {
    let bl = true;

    if (this.name == "") {
      this.nameClass = "active";
      bl = false;
    } else {
      this.nameClass = "";
    }

    return bl
  }

  checkEmail () {
    let bl = true;

    if (this.email == "") {
      this.emailClass = "active";
      bl = false;
    } else {
      this.emailClass = "";
    }

    return bl
  }

  checkLocation () {
    let bl = true;

    if (this.location == "") {
      this.locationClass = "active";
      bl = false;
    } else {
      this.locationClass = "";
    }

    return bl
  }

  checkState () {
    let bl = true;

    if (this.state == "") {
      this.stateClass = "active";
      bl = false;
    } else {
      this.stateClass = "";
    }

    return bl
  }

  checkCity () {
    let bl = true;

    if (this.city == "") {
      this.cityClass = "active";
      bl = false;
    } else {
      this.cityClass = "";
    }

    return bl
  }

  save() {
    let blName = this.checkName();
    let blEmail = this.checkEmail();
    let blState = this.checkState();
    let blCity = this.checkCity();
    let blLocation = this.checkLocation();

  }

}
