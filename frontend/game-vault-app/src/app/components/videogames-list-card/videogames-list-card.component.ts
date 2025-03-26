import { Component, Input } from '@angular/core';
import { Videogame } from '../../models/Videogame';
@Component({
  selector: 'app-videogames-list-card',
  imports: [],
  templateUrl: './videogames-list-card.component.html',
  styleUrl: './videogames-list-card.component.css'
})
export class VideogamesListCardComponent {
  @Input() videogame!: Videogame;
}
