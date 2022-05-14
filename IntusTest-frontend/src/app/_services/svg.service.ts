import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SvgModel } from '../_models/svg.model';

@Injectable({
  providedIn: 'root'
})
export class SvgService {
  private apiPATH = 'https://localhost:44373/api/svg/';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<SvgModel>(`${this.apiPATH}getdata`);
  }

  setConfig(modifiedData: SvgModel) {
    return this.http.post<void>(`${this.apiPATH}setdata`, modifiedData);
  }
}