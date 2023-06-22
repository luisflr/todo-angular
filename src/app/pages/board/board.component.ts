import { Component } from '@angular/core';
import { faSave, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as star } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
    .todos-board::-webkit-scrollbar {
      width: 15px;
      height: 10px;
    }

    .todos-board::-webkit-scrollbar-track {
      background: #1F6875;
      border-radius: 20px;
    }

    .todos-board::-webkit-scrollbar-thumb {
      background-color: #77A1AE ;
      border-radius: 5px;
      border: none;
    }
    `
  ]
})
export class BoardComponent {
  constructor() { }

  activeStar : boolean = false;

  faSave = faSave;
  faStar = faStar;
  star = star;

}
