import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $ : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  amdinId : string;
  adminPwd : string;

  constructor(private router : Router) { }

  ngOnInit() {
    $("body").css({"background-color":"#f5f5fa"});
  }

  login() {
    
    /*if (this.amdinId == "")
    {
      return;
    }

    if (this.adminPwd == "") {
      return;
    }*/

    this.router.navigate(["/admin"]);

  } 

}
