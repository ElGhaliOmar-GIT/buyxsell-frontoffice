import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {GlobUserService} from "../../../shared/services/glob-user.service";
import {UserAuthService} from "../../../shared/services/user-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private globUserService: GlobUserService,
              private userAuthService: UserAuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    this.globUserService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setRole(response.user.role);
        this.userAuthService.setId(response.user.id);
        this.userAuthService.setUsername(response.user.username);
        this.userAuthService.setToken(response.jwtToken);
        const  role = response.user.role;
        if(role === 'Admin') {
          this.router.navigate(['/testAdminFront']);
        } else {
          this.router.navigate(['/indexFront']);
        }
        // console.log(response.jwtToken);
        // console.log(response.user.role);
        // console.log(response.user.id);
        // console.log(response);
      }, (error) => {
        console.log(error);
      }
    );
  }

}
