import { Injectable } from '@angular/core';
import {  HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import {Statistique} from './../models/Statistique';
@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  readonly  basUrl='http://localhost:5000/statistique';
  
  constructor(private http: HttpClient) { }
  
  stat_simple():Observable<Statistique>{
    return this.http.get<Statistique>(this.basUrl+'/stat_simple')
    .pipe(map(stat => {
            
      if (stat) {
      console.log(stat)  
      }

      return stat;
  }));
  }
}
