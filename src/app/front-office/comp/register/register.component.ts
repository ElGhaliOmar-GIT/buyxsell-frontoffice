import { Component, OnInit } from '@angular/core';
import {Client} from "../../../shared/model/client";
import {GlobUserService} from "../../../shared/services/glob-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  client:Client = new Client();

  constructor(private globUserService: GlobUserService,
              private router: Router) { }

  ngOnInit(): void {
    this.client = new Client();
  }

  register() {
    this.globUserService.register(this.client).subscribe(
      () => {
        console.log(this.client);
        this.client = new Client();
        this.router.navigate(['/loginFront']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
