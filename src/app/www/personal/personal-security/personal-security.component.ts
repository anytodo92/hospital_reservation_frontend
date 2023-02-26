import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-personal-security',
  templateUrl: './personal-security.component.html',
  styleUrls: ['./personal-security.component.css']
})
export class PersonalSecurityComponent implements OnInit {

  nameClass : string;
  currentPasswordClass : string;
  newPasswordClass : string;
  confPasswordClass : string;
  locationClass : string;

  currentPassword : string;
  newPassword : string;
  confPassword : string;
  
  constructor(private ds : DataService) {
    this.ds.sendMenuData("3-1");
  }

  ngOnInit() {
    this.currentPasswordClass = "";
    this.newPasswordClass = "";
    this.confPasswordClass = "";
    
    this.currentPassword = ""; this.newPassword = ""; this.confPassword = "";
  }

  checkCurrentPassword () {
    let bl = true;

    if (this.currentPassword == "") {
      this.currentPasswordClass = "active";
      bl = false;
    } else {
      this.currentPasswordClass = "";
    }

    return bl
  }

  checkNewPassword () {
    let bl = true;

    if (this.newPassword == "") {
      this.newPasswordClass = "active";
      bl = false;
    } else {
      this.newPasswordClass = "";
    }

    return bl
  }

  checkConfPassword () {
    let bl = true;

    if (this.confPassword == "") {
      this.confPasswordClass = "active";
      bl = false;
    } else {
      this.confPasswordClass = "";
    }

    return bl
  }
  
  save() {
    let blCurrentPassword = this.checkCurrentPassword();
    let blNewPassword = this.checkNewPassword();
    let blConfPassword = this.checkConfPassword();
  }

}
