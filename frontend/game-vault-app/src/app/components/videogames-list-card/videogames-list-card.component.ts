import { Component, Input } from '@angular/core';
import { Videogame } from '../../models/Videogame';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-videogames-list-card',
  imports: [RouterLink],
  templateUrl: './videogames-list-card.component.html',
  styleUrl: './videogames-list-card.component.css'
})
export class VideogamesListCardComponent {
  @Input() videogame!: Videogame;
}
