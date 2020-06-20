import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from './appConfig/appConfig';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
    })
  };

  constructor(private _http: HttpClient) { }

  public loginUser(user: User): Observable<any> {
    return this._http.post(AppConfig.API_ENDPOINT + "/auth/authenticate", user);
  }

  public registerUser(user: User): Observable<any> {
    return this._http.post(AppConfig.API_ENDPOINT + "/auth/registerUser", user);
  }

  public userDetails(accessToken: string): Observable<any> { 
    
    let tokenStr = 'Bearer ' + accessToken;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this._http.get(AppConfig.API_ENDPOINT + "/user/userDetails", {headers});
  }

 
}
