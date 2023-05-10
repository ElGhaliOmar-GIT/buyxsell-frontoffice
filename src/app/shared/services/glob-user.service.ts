import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginData} from "../model/loginData";
import {UserAuthService} from "./user-auth.service";
import {Client} from "../model/client";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class GlobUserService {

  PATH = "http://localhost:9000/bns";
  requestHeaderNoToken = new HttpHeaders(
    {"No-Auth": "True"}
  );
  requestHeaderToken = new HttpHeaders(
    {"Authorization": this.userAuthService.getToken()}
  );

  constructor(private httpClient: HttpClient,
              private userAuthService: UserAuthService) { }

  public login(loginData: LoginData) {
    return this.httpClient.post(this.PATH + "/jwt/authenticate", loginData, { headers: this.requestHeaderNoToken });
  }

  public register(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.PATH + "/jwt/register", client, { headers: this.requestHeaderNoToken });
  }

  getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(this.PATH + `/users/getUserById/${userId}`, { headers: this.requestHeaderToken });
  }

  public roleVerification(allowedRoles: any): boolean {
    let isMatch = false;
    const userRole: string = this.userAuthService.getRole();
    if(userRole != null && userRole) {
      for(let i=0; i < allowedRoles.length; i++) {
        if(userRole === allowedRoles[i]) {
          isMatch = true;
        }
      }
    }
    return isMatch;
  }

  // ----------------------- TESTING
  public forAdmin() {
    return this.httpClient.get(this.PATH + "/glob-users/forAdmin", {responseType: "text"});
  }
}
