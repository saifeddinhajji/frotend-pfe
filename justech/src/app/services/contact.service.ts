
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  readonly basUrl='http://localhost:5000/contact';
  readonly basUrlFile='http://localhost:5000/upload/image';
  
  constructor(private http: HttpClient) { }
  add(data:any) {
    return this.http.post<any>(this.basUrl+`/add`, data)
        }
  all(page:number) {
    return this.http.get(this.basUrl+`/all?page=${page}`);
  }

  postFile(uploadfile: File): Observable<String> {
    
    const formData: FormData = new FormData();
    formData.append('profile', uploadfile, uploadfile.name);
    return this.http.post<String>(this.basUrlFile, formData).pipe(
      map((res) => { return res; })
     );
}
}
