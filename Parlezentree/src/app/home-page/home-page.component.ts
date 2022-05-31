import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

import { Observable } from 'rxjs';
import { RandomrecipeService } from '../randomrecipe.service';
import { IRecipe } from '../IRecipe';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  inputtyped:string = "";
  RRecipies: Observable<any[]> = new Observable<any[]>();
  stng: any = [];
  details: Array<{ title: string, image: string, link: string, healthScore: string, readyMin: string }> = [];
  detailscount:number = 0;
  list: IRecipe = {
    id: 0,
    title: "",
    calories: 0,
    carbs: 0,
    fat: 0,
    image: "",
    imageType: "",
    protein: 0
  };
  constructor(private nav: NavbarService, private RandomrecipeService: RandomrecipeService) { }

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
  }
}
