import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  error:boolean = false;

  onSubmit():void{

    console.log(this.userEmail, this.password);    
    console.log("start");
    console.log(this.user.getUser());
    console.log("end");
  }

  constructor(public nav: NavbarService,private user:UserService, private router:Router ) { }

  ngOnInit(): void {
    this.nav.hide();
  }

}
