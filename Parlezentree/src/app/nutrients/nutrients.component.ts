import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarService } from '../navbar.service';
import { NutrientsService } from '../nutrients.service';

@Component({
  selector: 'app-nutrients',
  templateUrl: './nutrients.component.html',
  styleUrls: ['./nutrients.component.css']
})
export class NutrientsComponent implements OnInit {

  calories: string = "1000";
  protein: string = "100";
  carbohydrate: string = "100";
  fat: string = "100";
  nutrientRec: Observable<any[]> = new Observable<any[]>();

  onSearch(): void {
    this.nutRec.getNutrientsRecipe(this.calories, this.fat, this.protein, this.carbohydrate);
    this.nutrientRec = this.nutRec.subject;
  }

  constructor(private nav: NavbarService, private nutRec: NutrientsService) { }

  ngOnInit(): void {
    this.nav.show();
    this.nutRec.getNutrientsRecipe("1000", "100", "100", "100");
    this.nutrientRec = this.nutRec.subject;
  }

}
