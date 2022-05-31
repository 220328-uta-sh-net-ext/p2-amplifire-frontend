import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IUser } from '../IUser';
import { UserService } from '../user.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName:string = "";
  lastName:string = "";
  userName:string = "";
  emailId:string = "";
  userPassword:string = "";
  contactNo:number = 0;

  onSubmit():void{
    
    const nUser:IUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      emailId: this.emailId,
      userPassword: this.userPassword,
      contactNo: this.contactNo
    }
 
    console.log(nUser);
    if(nUser.firstName!="" && nUser.lastName!="" && nUser.emailId!="" && nUser.contactNo!=0 && nUser.userName!="" && nUser.userPassword!=""){
    this.addUser(nUser);
    this.router.navigate(['login']);
    }
    this.firstName = "";
    this.lastName = "";
    this.userName = "";
    this.emailId = "";
    this.userPassword = "";
    this.contactNo = 0;
  }

  user:Observable<IUser[]> =  new Observable<IUser[]>();
  cUser:IUser={
    firstName:"",
    lastName:"",
    userName:"",
    emailId:"",
    userPassword:"",
    contactNo:0
  }

  navigateLogin(){
    this.router.navigate(['login']);
  }

  addUser(user:IUser):void{
    this.userService.addUser(user)
  }

  
  constructor(private nav:NavbarService,private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.user = this.userService.subject;
  }

}
