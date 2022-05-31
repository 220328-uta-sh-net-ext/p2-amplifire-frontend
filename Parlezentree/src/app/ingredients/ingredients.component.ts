import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavbarService } from '../navbar.service';
import { SearchbyingredientsService } from "../searchbyingredients.service"

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})

export class IngredientsComponent implements OnInit {
  isLogin: string = "false";
  ingredients: string = "";
  ingredientsRecipe: Observable<any[]> = new Observable<any[]>();
  search(): void {
    if (this.ingredients == "") {
      this.searchbyingredientsService.getIngredientRecipe("apple");
      this.ingredientsRecipe = this.searchbyingredientsService.subject;

    } else {
      this.searchbyingredientsService.getIngredientRecipe(this.ingredients);
      this.ingredientsRecipe = this.searchbyingredientsService.subject;
    }
  }

  constructor(private nav: NavbarService, private searchbyingredientsService: SearchbyingredientsService, private router: Router) { }

  ngOnInit(): void {
    this.nav.show();
    this.searchbyingredientsService.getIngredientRecipe("apple");
    this.ingredientsRecipe = this.searchbyingredientsService.subject;
    this.isLogin=localStorage.getItem("isLogin") || "false";
   
    if(this.isLogin == "true"){
      this.router.navigate(['ingredients']);
    }else{
      this.router.navigate(['login']);
    }
  }

}
