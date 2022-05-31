import { Component, EventEmitter, OnInit , Output} from '@angular/core';
import { map, Observable } from 'rxjs';


import { NavbarService } from '../navbar.service';
import { UpdateuserService } from '../updateuser.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId:number=0;
  firstName:string="";
  lastName:string="";
  email:string="";
  userName:string="";
  contanctNo:number=0;
  userPassword:string="";
  stng:any=[];
  
userDetails:Observable<any[]> = new Observable<any[]>();


onSubmit(): void{
   
  this.userId=Number(localStorage.getItem("userId"));
  this.userPassword=String(localStorage.getItem("userPass"));
  
    const user= {
      userid:this.userId,
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      userName:this.userName,
      contanctNo:this.contanctNo,
      passward:this.userPassword,
    }
    this.updateUser.updateUserInfo(this.userId, user )
  
    this.updateUser.getUserInfo(this.userId);
    this.userDetails=this.updateUser.subject;
   
    this.userDetails.forEach(element => {
    this.stng=Array.from(Object.values(element));
    this.firstName=this.stng[1];
    this.lastName=this.stng[2];
    this.userName=this.stng[3];
    this.email=this.stng[4];
   
    this.contanctNo=this.stng[6];
    localStorage.setItem("userId",this.stng[0]);
    localStorage.setItem("userPass",this.stng[5]);
    });
    
    }
  constructor(private nav:NavbarService,private updateUser:UpdateuserService) { }

  ngOnInit(): void {
     
     var id=Number(localStorage.getItem("userId"));
    
    this.nav.show();
    this.updateUser.getUserInfo(id);
    this.userDetails=this.updateUser.subject;
   
    this.userDetails.forEach(element => {
    this.stng=Array.from(Object.values(element));
    this.firstName=this.stng[1];
    this.lastName=this.stng[2];
    this.userName=this.stng[3];
    this.email=this.stng[4];
   
    this.contanctNo=this.stng[6];
    localStorage.setItem("userId",this.stng[0]);
    localStorage.setItem("userPass",this.stng[5]);
    });

  }

}
