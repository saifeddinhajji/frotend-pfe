import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe( retry(1),
        catchError((error: HttpErrorResponse) => {
            
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
           
            // client-side error
           
            errorMessage = `Error: ${error.error}`;
            //console.log("client",errorMessage)
          }
         /* else if(error.status==404)
          {
            console.log("404",error.error)
            errorMessage = `Error: ${error.error}`;
          }*/
         
           else {
               
            // server-side error
           
            errorMessage = `Message: ${error.error}`;
           // console.log("server",errorMessage)
          }
         
          return throwError(errorMessage);
        })
      )
  }
}