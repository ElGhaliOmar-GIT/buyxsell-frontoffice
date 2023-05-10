import { Component, OnInit } from '@angular/core';
import {UserAuthService} from "../../../shared/services/user-auth.service";
import {Router} from "@angular/router";
import {User} from "../../../shared/model/user";
import {GlobUserService} from "../../../shared/services/glob-user.service";
import {Client} from "../../../shared/model/client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = new User();

  constructor(private userAuthService: UserAuthService,
              private router: Router,
              private globUserService: GlobUserService) { }

  ngOnInit(): void {
    this.getUserById();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/indexFront'])
  }

  getUserById() {
    this.globUserService.getUserById(this.userAuthService.getId()).subscribe(
      (response) => {
        this.user = response;
      }, (error) => {
        console.log(error);
      }
    );
  }
}
