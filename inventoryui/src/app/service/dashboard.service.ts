import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiUrl: String;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl + "dashboard/"
  }

  getStats() {
    return this.http.get(this.apiUrl + "stats");
  }
}
