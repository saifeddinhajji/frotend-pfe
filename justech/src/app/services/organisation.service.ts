import { Injectable } from '@angular/core';
import {  HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { HttpClient } from  '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {Organisation} from './../models/organisation';
import {Item} from '../models/Item'
import {ItemOrg} from './../models/ItemOrg';
import {  retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
   readonly basUrl='http://localhost:5000';
  organisation:Organisation;
 listitem:ItemOrg[];




  org:any;
 
  constructor(private http: HttpClient) { }
  add(data:any) {
    return this.http.post<any>(this.basUrl+`/organisation/add`, data);
          
  }
  //list
  list(){
    return this.http.get(this.basUrl+'/organisation/list');
        }
  listservice():Observable<Item[]>{
   return this.http.get<Item[]>(this.basUrl+'/organisation/listservice');
    }
    listtype():Observable<Item[]>{
      return this.http.get<Item[]>(this.basUrl+'/organisation/listtype');
       }
  all(page:number,data:any) {
        return this.http.post(this.basUrl+`/organisation/all?page=${page}`,data);
  }


    detaille(id:any):Observable<Organisation>
    {
      return  this.http.get<Organisation>(this.basUrl+`/organisation/find/formation/`+id).pipe(
        map(response =>{
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
    return this.http.post<String>(this.basUrl+`/upload/organisation`, formData).pipe(
      map((res) => { return res; })
     );
}



SocialMedia(_id:String,formsocial:any){
  return this.http.post<any>(this.basUrl+`/organisation/socialmedia/`+_id, formsocial)
  .pipe(map(socialmedia => {     
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