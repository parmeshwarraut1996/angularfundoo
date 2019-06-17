import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user-service/user.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UtilityService } from "../../services/utilityService/utility.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private userService: UserService,
    public router: Router,
    private utility: UtilityService
  ) {}

  profileForm = new FormGroup({
    firstName: new FormControl("", [Validators.required,Validators.minLength(10)]),
    lastName: new FormControl("", [Validators.required,Validators.minLength(10)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirmPassword: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  ngOnInit() {}
  public hasError = (controlName: string, errorName: string) => {
    return this.profileForm.controls[controlName].hasError(errorName);
  };

  register() {
    if (
      this.profileForm.value.password != this.profileForm.value.confirmPassword
    ) {
      this.utility.openSnackBar("password does not match", "undo", 3000);
      return;
    } else if (this.profileForm.valid) {
      this.userService.signUp(this.profileForm.value).subscribe(
        data => {
          this.utility.openSnackBar("Register successful", "ok", 3000);
          this.router.navigate(["login"]);
        },
        err => {
          this.utility.openSnackBar("Register Unsuccessful", err, 3000);
        }
      );
    } else {
      this.utility.openSnackBar("please fill data", "error", 3000);
    }
  }

cancel(){
  this.router.navigate(['login'])

}
}
