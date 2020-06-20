import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements CanActivate{

  constructor( private _route: Router) { }

  canActivate(): boolean {
    console.log("In AuthorizationService");
    
    if(localStorage.getItem('ACCESS_TOKEN') ){
      console.log("returning true");
      return true;
    }
    console.log("User not logged in");

    //this._route.navigate(['/'])
    return false;
  } 
  
}
