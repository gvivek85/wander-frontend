import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) { }

  public getCardData(): Observable<any> {
    return this._http.get("http://localhost:9001/dashboard/getGlobalData");
  }

  public getCountryData(): Observable<any> {
    return this._http.get("http://localhost:9001/dashboard/getTopCountriesData");
  }

  public bigChart(): Observable<any> {
    return this._http.get("http://localhost:9001/dashboard/getSummary");
  }

  public linChart1(): Observable<any> {
    return this._http.get("http://localhost:9001/dashboard/getCountrySpecificData/united-states");
  }

  public linChart2(): Observable<any> {
    return this._http.get("http://localhost:9001/dashboard/getCountrySpecificData/Brazil");
  }

  public linChart3(): Observable<any> {
    return this._http.get("http://localhost:9001/dashboard/getCountrySpecificData/Russia");
  }

  public linChart4(): Observable<any> {
    return this._http.get("http://localhost:9001/dashboard/getCountrySpecificData/India");
  }

}
