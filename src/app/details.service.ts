import { Injectable } from '@angular/core';
import { DetailsProviders } from './details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  baseUrl:string="https://limitlesscareapi-staging.azurewebsites.net/api/NetworkProvidersBranches/GetNetworkProviderDetails";

  constructor(private http: HttpClient) {}

  
 
  getApiResponse(i: number):Observable<DetailsProviders>{

    const url = `${this.baseUrl}?providerId=${i}`;
    return this.http.get<DetailsProviders>(url);
  }

  
  getApiResponse_2(i: number,j:number|null):Observable<DetailsProviders>{

    const url = `${this.baseUrl}?providerId=${i}&branchId=${j}`;
    return this.http.get<DetailsProviders>(url);
  }

 
}
