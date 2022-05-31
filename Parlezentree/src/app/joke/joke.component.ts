import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Observable } from 'rxjs';
import { JokeandtriviaService } from '../jokeandtrivia.service';

@Component
  ({
    selector: 'app-joke',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
  })
export class JokeComponent implements OnInit {
  joketext: string = "";
  triviatext: string = "";
  jokeservice: Observable<any[]> = new Observable<any[]>();
  triviaservice: Observable<any[]> = new Observable<any[]>();

  constructor(private nav: NavbarService, private joke: JokeandtriviaService) {

  }

  ngOnInit(): void {
    this.nav.show();
    this.joke.getJoke();
    this.jokeservice = this.joke.subject;
    this.joke.getTrivia();
    this.triviaservice = this.joke.triviasubject;

    this.jokeservice.forEach(element => {
      this.joketext = Array.from(Object.values(element))[0];
    })

    this.triviaservice.forEach(element => {
      this.triviatext = Array.from(Object.values(element))[0];
    })

  }

}