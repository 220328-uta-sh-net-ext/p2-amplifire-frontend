import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';



@Injectable({
  providedIn: 'root'
})
export class UpdateuserService {
  userInfo:any[]=[];

  subject:Subject<any[]> = new Subject<any[]>();

  getUserInfo(id:number): void{
   
    this.http.get<any[]>("https://parlezentreeapi.azurewebsites.net/api/User/"+id.toString())
    .pipe(
      catchError((e) => {
        return throwError(e)
      }),
    
     
    
    )
    .subscribe((data) =>{
      console.log(data);
      this.userInfo= data;
      this.subject.next(this.userInfo);
    })
  }

  updateUserInfo(id:number,userInfo:any): void{

    const body = { 
    "userId": userInfo.userid, 
    "firstName":userInfo.firstName, 
    "lastName": userInfo.lastName, 
    "userName": userInfo.userName, 
    "emailId": userInfo.email,
    "userPassword": userInfo.passward,
     "contactNo": userInfo.contanctNo

};
    console.log(body);
    this.http.put<any[]>("https://parlezentreeapi.azurewebsites.net/api/User?id="+id,body,{ headers : {
      'accept': '*/*',
      'Content-Type': 'application/json'
    }})
    .pipe(
      catchError((e) => {
        return throwError(e)
      }),
 
    )
    .subscribe((data) =>{
      console.log(data);
      this.userInfo= data;
      this.subject.next(this.userInfo);
    })
  }
  constructor(private http:HttpClient) { }
  
}
