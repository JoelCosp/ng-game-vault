import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideogamesService } from '../../services/videogames.service';
import { Videogame } from '../../models/Videogame';
import { VideogameDetailsComponent } from '../../components/videogame-details/videogame-details.component';

@Component({
  selector: 'app-details',
  imports: [VideogameDetailsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  id!: string;
  videogame!: Videogame;

  constructor(private route: ActivatedRoute, private videogamesService: VideogamesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.videogamesService.getVideogameById(this.id).subscribe(( data ) => {
      this.videogame = data;
      console.log(this.videogame);
    })
  }
}
