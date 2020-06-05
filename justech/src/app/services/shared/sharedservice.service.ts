import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  readonly basUrl='http://localhost:5000';
  constructor(private http: HttpClient) { }
  postFile(data:FormData,uri:String):Observable<any>{
    console.log(this.basUrl+uri)
    return this.http.post<any>(this.basUrl+uri,data);
  }
  created(data:any,uri:string){
    return this.http.post(this.basUrl+uri,data);
  }

  delete(id:any,uri:string){
   return this.http.delete(this.basUrl+uri+'/'+id);
  }
  findById(id:any,uri:string)
  {
    return this.http.get(this.basUrl+uri+'/'+id);
  }
  update(id:any,uri:string,data:any)
  {
    
    return this.http.patch(this.basUrl+uri+'/'+id,data);
  
  }
}
