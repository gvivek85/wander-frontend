import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './appConfig/appConfig';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public loginUser(user: User):Observable<any>{
   return this._http.post(AppConfig.API_ENDPOINT + "/auth/authenticate",user);
  }

  public registerUser(user: User):Observable<any>{
    return this._http.post(AppConfig.API_ENDPOINT + "/auth/registerUser",user);
   }
}
