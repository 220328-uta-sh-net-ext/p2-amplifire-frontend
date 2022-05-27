import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})

export class IngredientsComponent implements OnInit {

  ingrediants:string =  "";

   search():void{
       alert(this.ingrediants);
       this.ingrediants="";
    }
    
  constructor(private nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
