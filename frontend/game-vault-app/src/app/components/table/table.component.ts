import { Component, OnInit } from '@angular/core';
import { VideogamesService } from '../../services/videogames.service';
import { Videogame } from '../../models/Videogame';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  videogames!: Videogame[];

  constructor(private videogamesService: VideogamesService) {
    this.videogames = [];
  }

  ngOnInit(): void {
    this.videogamesService.getVideogames().subscribe((videogame) => {
      this.videogames = videogame;
    })
  }

  deleteVideogame(): void {
    
  }
}
