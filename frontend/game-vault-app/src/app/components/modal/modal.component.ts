import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Videogame } from '../../models/Videogame';
import { VideogamesService } from '../../services/videogames.service';

@Component({
  selector: 'app-modal',
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() videogame!: Videogame;

  isModal = false;

  constructor(private videogameService: VideogamesService) {}

  toggleModal() {
    this.isModal = !this.isModal;
  }

  updateVideogame(id: string, videogame: any): void {

    const updatedVideogame = {
      title: videogame.title,
      release_year: videogame.release_year,
      rating: videogame.rating,
      description: videogame.description,
      price: videogame.price,
      image: videogame.image,
      multiplayer: videogame.multiplayer,
    }

    this.videogameService.updateVideogame(id, updatedVideogame).subscribe(
      (response) => {
        console.log('Videojuego actualizado:', response);
        this.toggleModal(); // Cerrar el modal después de la actualización
      },
      (error) => {
        console.error('Error al actualizar el videojuego:', error);
      }
    );
  }
}
