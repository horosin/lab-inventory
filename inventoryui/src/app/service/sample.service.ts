import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Sample } from '../models/sample';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }
 
  getAll() {
      return this.http.get<Sample[]>(`${environment.apiUrl}samples`);
  }

  getById(id: number) {
      return this.http.get(`${environment.apiUrl}samples/` + id);
  }

  add(sample: Sample) {
      return this.http.post(`${environment.apiUrl}samples/`, sample);
  }

  update(sample: Sample) {
      return this.http.put(`${environment.apiUrl}samples/` + sample.id, sample);
  }

  delete(id: number) {
      return this.http.delete(`${environment.apiUrl}samples/` + id);
  }
}
