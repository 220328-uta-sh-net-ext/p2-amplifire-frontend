import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

import { Observable } from 'rxjs';
import { RandomrecipeService } from '../randomrecipe.service';
import { IRecipe } from '../IRecipe';
import { Router } from '@angular/router';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  inputtyped: string = "";
  RRecipies: Observable<any[]> = new Observable<any[]>();
  stng: any = [];
  details: Array<{ title: string, image: string, link: string, healthScore: string, readyMin: string }> = [];
  detailscount: number = 0;
  isLogin: string = "false";

  constructor(private nav: NavbarService, private RandomrecipeService: RandomrecipeService, private router: Router) { }

  search(): void {
    this.RandomrecipeService.getSearchRecipe(this.inputtyped);
    this.RRecipies = this.RandomrecipeService.subject;
    this.RRecipies.forEach(element => {

      this.stng = Array.from(Object.values(element)[0]);


      this.details = [];
      for (let index = 0; index < this.stng.length; index++) {


        this.details.push({ title: this.stng[index].title, image: this.stng[index].image, link: this.stng[index].sourceUrl, healthScore: this.stng[index].healthScore, readyMin: this.stng[index].readyInMinutes });

      }
      this.detailscount = this.details.length;
      console.log(this.details);
    });

  }


  ngOnInit(): void {
    this.nav.show();
    this.RandomrecipeService.getRandomRecipe();
    this.RRecipies = this.RandomrecipeService.subject;
    this.RRecipies.forEach(element => {

      this.stng = Array.from(Object.values(element)[0]);


      for (let index = 0; index < this.stng.length; index++) {


        this.details.push({ title: this.stng[index].title, image: this.stng[index].image, link: this.stng[index].sourceUrl, healthScore: this.stng[index].healthScore, readyMin: this.stng[index].readyInMinutes });

      }
      this.detailscount = this.details.length;
      console.log(this.details);
    });
    this.isLogin = localStorage.getItem("isLogin") || "false";
    
    if (this.isLogin == "true") {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
