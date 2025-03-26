import { Component, OnInit } from '@angular/core';
import { VideogamesService } from '../../services/videogames.service';
import { Videogame } from '../../models/Videogame';

@Component({
  selector: 'app-videogames-list',
  imports: [],
  templateUrl: './videogames-list.component.html',
  styleUrl: './videogames-list.component.css'
})
export class VideogamesListComponent implements OnInit{
  
  videogames: Videogame[];

  constructor(public videogamesService: VideogamesService) {
    this.videogames = [];
  }

  ngOnInit(): void {
    this.videogamesService.getVideogames().subscribe((videogame) => {
      this.videogames = videogame;
      console.log(this.videogames);
    })
  }
}
