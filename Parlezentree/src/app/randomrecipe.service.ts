import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  throwError, catchError, map, Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class RandomrecipeService {

  RandomRecipe:any[] = [];
  SearchRecipe:any[] = [];

  subject:Subject<any[]> = new Subject<any[]>();

  getRandomRecipe(): void{
    this.http.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=24", {headers:{
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "5cec28a64fmsh409c42b11206bc8p14eaafjsn1cb2fedef506"
  }})
    .pipe(
      catchError((e) => {
        return throwError(e)
      })
    )
    .subscribe((data) =>{
      console.log(data);
      this.RandomRecipe = data as any[];
      this.subject.next(this.RandomRecipe);
    })
  }

  getSearchRecipe(inputtyped:string): void{
    this.http.get<any[]>('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?limitLicense=false&addRecipeInformation=true&query=' + inputtyped, {headers:{
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "5cec28a64fmsh409c42b11206bc8p14eaafjsn1cb2fedef506"
    }})
    .pipe(
      catchError((e) => {
        return throwError(e)
      })
    )
    .subscribe((data) =>{
      console.log(data);
      this.SearchRecipe = data as any[];
      this.subject.next(this.SearchRecipe);
    })
  }


  
  constructor(private http:HttpClient,) { }
}
