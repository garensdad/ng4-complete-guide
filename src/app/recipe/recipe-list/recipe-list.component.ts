import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test Recipe', 'https://get.pxhere.com/photo/dish-food-recipe-eat-meat-cuisine-steak-veal-fillet-venison-red-meat-beef-tenderloin-rib-eye-steak-roast-beef-animal-source-foods-kobe-beef-sirloin-steak-corned-beef-lamb-and-mutton-fillet-of-heidschnucke-carne-asada-762027.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
