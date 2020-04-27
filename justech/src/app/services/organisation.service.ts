import { Injectable } from '@angular/core';
import {  HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Organisation} from './../models/organisation';

import {ItemOrg} from './../models/ItemOrg';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  organisation:Organisation;
 listitem:ItemOrg[];




  org:any;
  readonly  basUrl='http://localhost:5000/organisation';
  readonly basUrlFile='http://localhost:5000';
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
  //list
  list(){
    return this.http.get(this.basUrl+'/list');
        }
  all(page:number) {
    return this.http.get(this.basUrl+`/all?page=${page}`);
  }


    detaille(id:any):Observable<Organisation>
    {
      return  this.http.get<Organisation>(this.basUrl+`/find/formation/`+id).pipe(
        map(response =>{
          console.log(response)
          const organisation=new Organisation(response);
          return organisation;
        })
      )
          }
    
 /* upload(fromdata:any){
    return this.http.post<String>(this.basUrlFile+`/upload/image`,fromdata, {  
      reportProgress: true,  
      observe: 'events'  
    });
  }*/
  postFile(uploadfile: File): Observable<String> {
    
    const formData: FormData = new FormData();
    formData.append('profile', uploadfile, uploadfile.name);
    return this.http.post<String>(this.basUrlFile+`/upload/image`, formData).pipe(
      map((res) => { return res; })
     );
}



SocialMedia(_id:String,formsocial:any){
  return this.http.post<any>(this.basUrl+`/socialmedia/`+_id, formsocial)
  .pipe(map(socialmedia => {
      
     console.log(socialmedia)

      
  }));
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
  
}*/