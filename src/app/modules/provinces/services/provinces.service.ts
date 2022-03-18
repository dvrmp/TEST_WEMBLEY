import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Provinces } from '../dtos/provinces.dto';
import { ProvinceDetails } from '../dtos/province-details.dto';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Provinces> {
    return this.httpClient.get<Provinces>(environment.routes.URL_GET_ALL_PROVINCES)
  }

  public getDetail(codprov: string): Observable<ProvinceDetails> {
    return this.httpClient.get<ProvinceDetails>(`${environment.routes.URL_GET_DETAILS_PROVINCE}${codprov}`);
  }
}
