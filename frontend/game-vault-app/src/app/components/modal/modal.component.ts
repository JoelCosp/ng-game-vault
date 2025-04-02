import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Videogame } from '../../models/Videogame';
import { VideogamesService } from '../../services/videogames.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-modal',
  imports: [NgClass, FormsModule, CommonModule],
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

  updateVideogame(id: string | undefined, formValues: any): void {
    if (!id) {
        console.error('El ID del videojuego es inválido');
        return; // No hacer nada si el ID es inválido
    }

    const updatedVideogame = {
      _id: id,
      title: formValues.title,
      developer: formValues.developer,
      genre: formValues.genre,
      platforms: formValues.platforms,
      release_year: formValues.release_year,
      rating: formValues.rating,
      description: formValues.description,
      price: formValues.price,
      image: formValues.image,
      multiplayer: formValues.multiplayer,
    };

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
