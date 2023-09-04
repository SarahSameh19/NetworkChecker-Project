import { Injectable } from '@angular/core';
import {printerface} from '../app/pr';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProviderCallingService {
  baseUrl:string="https://api.limitlesscare.com/api/NetworkProviders/GetNetworkProviders?currentPage=1&pageSize=20&";

  constructor(private http: HttpClient) {}

  
 
  getApiResponse(i: string):Observable<printerface>{

    const url = `${this.baseUrl}staffId=${i}`;
    return this.http.get<printerface>(url);
  }
}
