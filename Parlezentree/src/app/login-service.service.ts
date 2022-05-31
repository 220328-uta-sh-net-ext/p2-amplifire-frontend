import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  //token:string = ""

  // Let's create a basic login method
 // login(userEmail:string, password:string):Observable<any>{
 //    return this.http.get("https://parlezentreeapi.azurewebsites.net/api/login/", JSON.stringify({userEmail, password}),
    // return this.http.post("https://parlezentreeapi.azurewebsites.net/api/login/", JSON.stringify({userEmail, password}),
    // // We need to add headers to specify content type
    // {headers: {'Content-Type':'application/json'}}
    // )
    // .pipe(
    //   catchError((e) =>{
    //     return throwError(e)
    //   }
    // ))
  //}
  constructor(private http:HttpClient) { }
}
