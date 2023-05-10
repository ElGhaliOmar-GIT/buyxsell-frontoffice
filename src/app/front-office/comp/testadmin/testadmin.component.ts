import { Component, OnInit } from '@angular/core';
import {GlobUserService} from "../../../shared/services/glob-user.service";

@Component({
  selector: 'app-testadmin',
  templateUrl: './testadmin.component.html',
  styleUrls: ['./testadmin.component.css']
})
export class TestadminComponent implements OnInit {

  message: string = "";
  constructor(private globUserService: GlobUserService) { }

  ngOnInit(): void {
    this.forUser();
  }

  forUser() {
    this.globUserService.forAdmin().subscribe(
      (response) => {
        this.message = response;
      }, (error) => {
        console.log(error);
      }
    );
  }

}
