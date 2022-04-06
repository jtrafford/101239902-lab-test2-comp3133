import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private httpClient: HttpClient) { }

  getAllMissions() {
    return this.httpClient.get<mission>('https://api.spacexdata.com/v3/launches');
  }

  getMissionById(id: string) {
    return this.httpClient.get<mission>(`https://api.spacexdata.com/v3/launches/${id}`);
  }
}