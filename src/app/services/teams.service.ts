import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Team} from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get(`${this.API_URI}/teams`)
  }

  getTeam (id: string) {
    return this.http.get(`${this.API_URI}/teams/${id}`)
  }

  saveTeam (team: Team) {
    return this.http.post(`${this.API_URI}/teams`, team)
  }
  deleteTeam (id: string) {
    return this.http.delete(`${this.API_URI}/teams/${id}`)
  }
  updateTeam(id: string|number, updateTeam)  {
    return this.http.put(`${this.API_URI}/teams/${id}`, updateTeam);
  }
}

