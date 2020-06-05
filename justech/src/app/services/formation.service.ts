import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  org:any;
  readonly  basUrl='http://localhost:5000';
  constructor(private http: HttpClient) { }
  add(data:any) {
    return this.http.post<any>(this.basUrl+`/formation/create/`+data.organisateur, data)
        .pipe(map(org => {
            
            if (org) {
            console.log(org)  
            }
  
            return org;
        }));
  }
  all(page:number) {
    return this.http.get(this.basUrl+`/formation/all?page=${page}`);
  }
 
}