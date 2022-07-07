import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Beehive } from './beehive';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeehiveService {
  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getBeehives(): Observable<Beehive[]>{
    return this.http.get<Beehive[]>(`${this.apiServerUrl}/beehive/all`)
  }

  public addBeehive(beehive : Beehive): Observable<Beehive>{
    return this.http.post<Beehive>(`${this.apiServerUrl}/beehive/add`, beehive)
  }

  public updateBeehive(beehive : Beehive): Observable<Beehive>{
    return this.http.put<Beehive>(`${this.apiServerUrl}/beehive/update`, beehive)
  }

  public deleteBeehive(beehiveId : number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/beehive/delete/${beehiveId}`)
  }

}
