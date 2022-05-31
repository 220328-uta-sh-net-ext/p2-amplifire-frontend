import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, throwError, catchError, map } from 'rxjs';
import { LoginServiceService } from './login-service.service';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  allUser:IUser[]=[];
  errormessage:string=""
  subject:Subject<IUser[]> = new Subject<IUser[]>();
  getUser(email:string,password:string):void{
    this.http.get<IUser[]>("https://parlezentreeapi.azurewebsites.net/api/Login?email="+ email +"&password="+password)
    .pipe(
      catchError((e)=>{
        this.errormessage="Invalid emailid or password";
       return this.errormessage;
      })
    )
    .subscribe((data)=>{
    //  console.log(data);
      this.allUser = data as IUser[];
      this.subject.next(this.allUser);
    })
  }
  addUser(user: IUser) : void{
    this.http.post<IUser>('https://parlezentreeapi.azurewebsites.net/api/User', JSON.stringify(user),
    { headers : {
      'Content-Type': 'application/json',
    }})
    .pipe(
      catchError((e) => {
        return throwError(e)
      }))
    .subscribe((data) => {
      this.allUser.push(data)
      this.subject.next(this.allUser)
    })
  }
  constructor(private http:HttpClient, private loginService:LoginServiceService) { }
}

