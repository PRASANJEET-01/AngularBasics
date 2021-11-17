import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string="";
  password:string="";
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.userName === "Prasanjeet" && this.password==="lost"){
      console.log("Welcome user ");
      this._router.navigate(['/Home'])
    }
    else{
      this.userName="";
      this.password="";
      console.log("Invalid user");
    }
  }
}
