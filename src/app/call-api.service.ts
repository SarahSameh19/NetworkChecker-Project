import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ApiResponse } from './inter';
@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  url:string="https://LimitlessCareAPI-Development.azurewebsites.net/api/NetworkProviders/GetNetworkProviders";
  constructor(private http:HttpClient) {

  }

  getApi():Observable<ApiResponse>{

    const headers = new HttpHeaders({
      // Set your authentication token or other headers here
    });

    return this.http.get<ApiResponse>(this.url);
  }
}
