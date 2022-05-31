import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../IUser';
// import { LoginServiceService } from '../login-service.service';
import { NavbarService } from '../navbar.service';
import { UserService } from '../user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  navigateRegister(){
    this.router.navigate(['register']);
  }

  userEmail:string = "";
  password:string = "";
  userDetails:Observable<IUser[]> = new Observable<IUser[]>();
  error:boolean = false;
  isLogin:string="false";
  onSubmit():void{
    console.log(this.userEmail, this.password);
    this.user.getUser(this.userEmail, this.password);
    this.userDetails=this.user.subject;
    this.user.errormessage="";
    this.userDetails.forEach(element => {
      if(this.user.errormessage=="Invalid emailid or password"){
         this.error=true;
      }else{
        this.error=false;
        console.log(Array.from(Object.values(element))[5]);
        localStorage.setItem("userId",Array.from(Object.values(element))[0].toString());
        localStorage.setItem("userPass",Array.from(Object.values(element))[5].toString());
        localStorage.setItem("isLogin","true");
        this.router.navigate(['home']);
      }
     

    })
  }

  constructor(public nav: NavbarService,private user:UserService, private router:Router ) { }

  ngOnInit(): void {
    this.nav.hide();
    this.isLogin=localStorage.getItem("isLogin") || "false";
   
    if(this.isLogin == "true"){
      this.router.navigate(['home']);
    }else{
      this.router.navigate(['login']);
    }
  }

}
