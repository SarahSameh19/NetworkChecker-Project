import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  url:string="";
  constructor(private http:HttpClient) {

  }

  getApi(){
    return this.http.get(this.url);
  }
}
