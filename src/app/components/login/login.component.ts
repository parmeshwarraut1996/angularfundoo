import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {}

  loginForm = new FormGroup({
    email:new FormControl("",[Validators.email,Validators.required]),
    password:new FormControl("",[Validators.required])
  });

  ngOnInit() {}
  public hasError=(controlName:string,errorName:string)=>{
    return this.loginForm.controls[controlName].hasError(errorName)
  }

  register() {
    this.router.navigate(["register"]);
  }
  login(){

  }
}
