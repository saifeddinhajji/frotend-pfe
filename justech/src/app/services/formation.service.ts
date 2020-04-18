import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  org:any;
  readonly  basUrl='http://localhost:5000/formation';
  constructor(private http: HttpClient) { }
  add(data:any) {
    return this.http.post<any>(this.basUrl+`/add`, data)
        .pipe(map(org => {
            
            if (org) {
            console.log(org)  
            }
  
            return org;
        }));
  }
  all(page:number) {
    return this.http.get(this.basUrl+`/all?page=${page}`);
  }
}