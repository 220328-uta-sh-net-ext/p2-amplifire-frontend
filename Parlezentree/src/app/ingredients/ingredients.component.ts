import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { NavbarService } from '../navbar.service';
import { SearchbyingredientsService } from "../searchbyingredients.service"

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})

export class IngredientsComponent implements OnInit {

  ingrediants:string =  "";
  ingrediantsRecipe:Observable<any[]> = new Observable<any[]>();
   search():void{
     if(this.ingrediants==""){
      this.searchbyingredientsService.getIngredientRecipe("apple");
      this.ingrediantsRecipe=this.searchbyingredientsService.subject;
      
     }else{
     this.searchbyingredientsService.getIngredientRecipe(this.ingrediants);
     this.ingrediantsRecipe=this.searchbyingredientsService.subject;
     }
    }

  constructor(private nav:NavbarService,private searchbyingredientsService: SearchbyingredientsService) { }

  ngOnInit(): void {
    this.nav.show();
    this.searchbyingredientsService.getIngredientRecipe("apple");
    this.ingrediantsRecipe=this.searchbyingredientsService.subject;
  }

}
