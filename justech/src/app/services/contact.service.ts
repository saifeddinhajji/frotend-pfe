
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  readonly basUrl='http://localhost:5000/contact';
  
  constructor(private http: HttpClient) { }
  add(data:any) {
    return this.http.post<any>(this.basUrl+`/add`, data)
        .pipe(map(contact => {
          console.log(contact) 
            
            return contact;
        }));
  }
  all(page:number) {
    return this.http.get(this.basUrl+`/all?page=${page}`);
  }
}
