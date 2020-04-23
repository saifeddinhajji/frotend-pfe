import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MailService {
  readonly basUrl='http://localhost:5000/sendemail/email';
  constructor(private http: HttpClient) { }
  mail(maildata:any):Observable<boolean>
  {
    return  this.http.post<boolean>(this.basUrl,maildata).pipe(
      map(response =>{
        console.log(response)
        return true;
      })
    )
        }
}
