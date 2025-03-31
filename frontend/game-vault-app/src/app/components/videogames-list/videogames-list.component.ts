import { Component, OnInit } from '@angular/core';
import { VideogamesService } from '../../services/videogames.service';
import { Videogame } from '../../models/Videogame';
import { CommonModule } from '@angular/common';
import { VideogamesListCardComponent } from '../videogames-list-card/videogames-list-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-videogames-list',
  imports: [CommonModule, FormsModule, VideogamesListCardComponent],
  templateUrl: './videogames-list.component.html',
  styleUrl: './videogames-list.component.css'
})
export class VideogamesListComponent implements OnInit{
  
  videogames: Videogame[];
  filteredVideogames: Videogame[];
  priceFilter!: string;
  searchText!: string;

  constructor(public videogamesService: VideogamesService) {
    this.videogames = [];
    this.filteredVideogames = [];
    this.priceFilter = '';
    this.searchText = '';
  }

  ngOnInit(): void {
    this.videogamesService.getVideogames().subscribe((videogame) => {
      this.videogames = videogame;
      this.filteredVideogames = videogame;
    })
  }

  applyFilters(): void {
    this.filteredVideogames = this.videogames.filter((videogame) => {
      let isValid = true;
      
      // Filtro por precio
      if (this.priceFilter === 'low') {
        isValid = isValid && Number(videogame.price) <= 30;
      } else if (this.priceFilter === 'high') {
        isValid = isValid && Number(videogame.price) > 30;
      }

      if (this.searchText) {
        isValid = isValid && videogame.title.toLowerCase().includes(this.searchText.toLowerCase());
      }

      return isValid;
    });
  }
}
