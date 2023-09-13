import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ApiResponse } from './inter';
@Injectable({
  providedIn: 'root'
})
export class BranchesService {
  baseUrl:string="https://limitlesscareapi-staging.azurewebsites.net/api/NetworkProvidersBranches/GetNetworkProviderBranches?currentPage=1&pageSize=20&";

  constructor(private http: HttpClient) {}

  
 
  getApiResponse(i: string,prvid:number):Observable<any>{

    const url = `${this.baseUrl}staffId=${i}&providerId=${prvid}`;
    return this.http.get<any>(url);
  }

 
}
