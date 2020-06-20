import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../appConfig/appConfig';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
    })
  };
  
  constructor(private _http: HttpClient) {  
      
  }

  public getCardData(): Observable<any> {
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getGlobalData", this.httpOptions);
  }

  public getCountryData(): Observable<any> {
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getTopCountriesData", this.httpOptions);
  }

  public bigChart(): Observable<any> {
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getSummary", this.httpOptions);
  }

  public linChart1(): Observable<any> {
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getCountrySpecificData/united-states", this.httpOptions);
  }

  public linChart2(): Observable<any> {
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getCountrySpecificData/Brazil", this.httpOptions);
  }

  public linChart3(): Observable<any> {
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getCountrySpecificData/Russia");
  }

  public linChart4(): Observable<any> {
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getCountrySpecificData/India", this.httpOptions);
  }

  public pieChart(): Observable<any> {
    return this._http.get(AppConfig.API_ENDPOINT + "/dashboard/getCountryDeaths", this.httpOptions);
  }

  public getUsers(): Observable<any> {
    return this._http.get(AppConfig.API_ENDPOINT + "/user/getUserList", this.httpOptions);
  }


}
