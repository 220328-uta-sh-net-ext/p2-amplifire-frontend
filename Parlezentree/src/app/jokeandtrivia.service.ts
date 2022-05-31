import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class JokeandtriviaService {

  Joke:any[] = [];
  Trivia:any[] = [];

  subject:Subject<any[]> = new Subject<any[]>();
  triviasubject:Subject<any[]> = new Subject<any[]>();
  getJoke(): void{
    this.http.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random", {headers:{
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
      this.Joke = data as any[];
      this.subject.next(this.Joke);
    })
  }

  getTrivia(): void{
    this.http.get<any[]>('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/trivia/random', {headers:{
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
      this.Trivia = data as any[];
      this.triviasubject.next(this.Trivia);
    })
  }

  constructor(private http:HttpClient) { }
}
