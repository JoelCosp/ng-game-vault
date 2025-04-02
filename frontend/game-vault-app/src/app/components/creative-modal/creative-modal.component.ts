import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Videogame } from '../../models/Videogame';
import { VideogamesService } from '../../services/videogames.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creative-modal',
  imports: [NgClass, FormsModule, CommonModule],
  templateUrl: './creative-modal.component.html',
  styleUrl: './creative-modal.component.css'
})
export class CreativeModalComponent {

  isCreativeModal = false;

  videogame: any = {
    title: '',
    developer: '',
    genre: '',
    platforms: '',
    release_year: 0,
    rating: 0,
    description: '',
    price: 0,
    image: '',
    multiplayer: false,
  };

  constructor(private videogameService: VideogamesService) {}

  toggleCreativeModal() {
    this.isCreativeModal = !this.isCreativeModal;
  }

  createVideogame() {
    this.videogameService.createVideogame(this.videogame).subscribe(
      (response) => {
          console.log('Videojuego creado', response);
      },
      (error) => {
          console.error('Error al crear el videojuego:', error);
      }
    );
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('---> FORM DATA:', this.videogame);
    this.createVideogame();
  }
}
