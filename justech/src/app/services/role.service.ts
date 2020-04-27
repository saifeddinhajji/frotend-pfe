import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
roles:String[];
   readonly  basUrl='http://localhost:5000/role';
  
   constructor(private http: HttpClient) { }
   userroles(_id){
    return this.http.get(this.basUrl+`/userroles/`+_id)
    .pipe(
            map(response =>{
             console.log(response)
              
              return response;
            })
    )}
}
