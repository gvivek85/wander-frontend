import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public loginUser(user: User):Observable<any>{
   return this._http.post("http://localhost:9001/auth/authenticate",user);
  }

  public registerUser(user: User):Observable<any>{
    return this._http.post("http://localhost:9001/auth/registerUser",user);
   }
}
