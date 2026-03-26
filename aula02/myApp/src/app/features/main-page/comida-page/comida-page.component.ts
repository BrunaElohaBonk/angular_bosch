import { Component, EventEmitter, Input, Output } from '@angular/core';
// import MockPessoas, { IPessoa } from './Pessoas.mock';
import menu, { FoodItem } from './CardComida.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {

  protected menu: FoodItem[] = []
  protected focusedFood?: FoodItem;

  constructor () {
    this.menu = menu;
  }

  onCardClick = (item: FoodItem) => {
    this.focusedFood = item
  }
}
