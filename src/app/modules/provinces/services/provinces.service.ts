import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GET_ALL_PROVINCES_RESPONSE_DTO } from '../dtos/provinces.dto';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {

  constructor(private httpClient: HttpClient) { }

  public getProvinces(): Observable<GET_ALL_PROVINCES_RESPONSE_DTO> {
    return this.httpClient.get<GET_ALL_PROVINCES_RESPONSE_DTO>(environment.routes.URL_GET_ALL_PROVINCES)
  }
}
