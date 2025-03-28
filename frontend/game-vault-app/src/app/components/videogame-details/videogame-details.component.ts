import { Component, Input } from '@angular/core';
import { Videogame } from '../../models/Videogame';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-videogame-details',
  imports: [CommonModule],
  templateUrl: './videogame-details.component.html',
  styleUrl: './videogame-details.component.css'
})
export class VideogameDetailsComponent {
  @Input() videogame!: Videogame;
}
