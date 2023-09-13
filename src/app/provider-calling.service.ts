import { Injectable } from '@angular/core';
import {printerface} from '../app/pr';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProviderCallingService {
  baseUrl:string="https://limitlesscareapi-staging.azurewebsites.net/api/NetworkProviders/GetNetworkProviders?pageSize=20&";

  constructor(private http: HttpClient) {}

  
 
  getApiResponse(i: string,pagee:number):Observable<printerface>{



    const url = `${this.baseUrl}staffId=${i}&currentPage=${pagee}`;
    return this.http.get<printerface>(url);
  }
}
