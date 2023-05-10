import { Component, OnInit } from '@angular/core';
import {UserAuthService} from "../../shared/services/user-auth.service";
import {Router} from "@angular/router";
import {GlobUserService} from "../../shared/services/glob-user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userAuthService: UserAuthService,
              private router: Router,
              public globUserService: GlobUserService) { }

  ngOnInit(): void {
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/indexFront'])
  }

}
