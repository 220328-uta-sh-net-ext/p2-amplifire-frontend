import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchbyingredientsService {
  ingredientRecipe:any[]=[];

  subject:Subject<any> = new Subject<any>();

  getIngredientRecipe(ingrediants:string): void{
    
    this.http.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients="+ingrediants+"&number=24&ignorePantry=true&ranking=1",{headers:{
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "5cec28a64fmsh409c42b11206bc8p14eaafjsn1cb2fedef506"
    }})
    .pipe(
      catchError((e) => {
        return throwError(e)
      }),
    
     
    
    )
    .subscribe((data) =>{
      console.log(data);
      this.ingredientRecipe= data as any[];
      this.subject.next(this.ingredientRecipe);
    })
  }
  constructor(private http:HttpClient) { }
}
