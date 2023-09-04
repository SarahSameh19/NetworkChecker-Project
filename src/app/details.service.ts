import { Injectable } from '@angular/core';
import { DetailsProviders } from './details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  baseUrl:string="https://api.limitlesscare.com/api/NetworkProvidersBranches/GetNetworkProviderDetails";

  constructor(private http: HttpClient) {}

  
 
  getApiResponse(i: number):Observable<DetailsProviders>{

    const url = `${this.baseUrl}?providerId=${i}`;
    return this.http.get<DetailsProviders>(url);
  }

 
}
