import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutrientsService {
  nutrientsRecipe:any[]=[];
  
  subject:Subject<any[]>= new Subject<any[]>();
 getNutrientsRecipe(calories:string,fat:string,protein:string,carbs:string){
    this.http.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&random=true&maxCalories=" + calories + "&maxFat=" + fat + "&maxProtein=" + protein + "&maxCarbs=" + carbs + "&number=24",{headers:{
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
      
     
      this.nutrientsRecipe= data as any[];
      this.subject.next(this.nutrientsRecipe);
      
      
    })
  }
  constructor(private http:HttpClient) { }
}
