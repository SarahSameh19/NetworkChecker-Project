import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Speciality } from './spec';

@Injectable({
  providedIn: 'root',
})
export class SpecialityService {
  private apiUrl = 'https://limitlesscareapi-staging.azurewebsites.net/api/NetworkProviders/GetProviderFiltersCriteria?specialties=';

  constructor(private http: HttpClient) {}

  getSpecialities(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
