import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../appConfig/appConfig';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) {  
      
  }

  public getCardData(): Observable<any> {
    let tokenStr = 'Bearer ' + localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getGlobalData", {headers});
  }

  public getCountryData(): Observable<any> {
    let tokenStr = 'Bearer ' + localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getTopCountriesData", {headers});
  }

  public bigChart(): Observable<any> {
    let tokenStr = 'Bearer ' + localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getSummary", {headers});
  }

  public linChart1(): Observable<any> {
    let tokenStr = 'Bearer ' + localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getCountrySpecificData/united-states", {headers});
  }

  public linChart2(): Observable<any> {
    let tokenStr = 'Bearer ' + localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getCountrySpecificData/Brazil", {headers});
  }

  public linChart3(): Observable<any> {
    let tokenStr = 'Bearer ' + localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getCountrySpecificData/Russia", {headers});
  }

  public linChart4(): Observable<any> {
    let tokenStr = 'Bearer ' + localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getCountrySpecificData/India", {headers});
  }

  public pieChart(): Observable<any> {
    let tokenStr = 'Bearer ' + localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getCountryDeaths", {headers});
  }

  public getUsers(): Observable<any> {
    let tokenStr = 'Bearer ' + localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this._http.get(AppConfig.API_ENDPOINT + "/user/getUserList", {headers});
  }


}
