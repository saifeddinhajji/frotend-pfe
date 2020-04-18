import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  org:any;
  readonly  basUrl='http://localhost:5000/organisation';
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

/*import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Patient {
  public  basUrl:String;
  constructor(private http: HttpClient) { 
    var uri =window.location.href;
    if(uri.includes("localhost:4200")){
      this.basUrl='http://localhost:80/patient';
    }else{
      this.basUrl='https://api-ultimate-traking.virussantecommunication.ca/patient';
    }
  }
  all(page:number) {
    return this.http.get(this.basUrl+`/all?page=${page}`);
  }
}*/