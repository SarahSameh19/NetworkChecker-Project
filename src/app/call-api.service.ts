import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ApiResponse } from './inter';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  baseUrl:string="https://LimitlessCareAPI.azurewebsites.net/api/Patients/ValidateStaffId";
  constructor(private http:HttpClient) {

  }

  getApi(insuranceNumber: string):Observable<ApiResponse>{

    const url = `${this.baseUrl}?staffId=${insuranceNumber}`;
    return this.http.get<ApiResponse>(url);
  }
}
