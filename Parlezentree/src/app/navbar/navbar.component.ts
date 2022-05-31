import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  onLogOut(){
    localStorage.setItem("userId","");
    localStorage.setItem("userPass","");
    localStorage.setItem("isLogin","false");
    this.router.navigate(['login']);
  }

  constructor(public nav: NavbarService, private router:Router) { }

  ngOnInit(): void {
  }

}
