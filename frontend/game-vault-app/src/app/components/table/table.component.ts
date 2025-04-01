import { Component, OnInit } from '@angular/core';
import { VideogamesService } from '../../services/videogames.service';
import { Videogame } from '../../models/Videogame';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule, ModalComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  videogames!: Videogame[];

  @ViewChild(ModalComponent) modal!: ModalComponent; // Referencia al hijo

  constructor(private videogamesService: VideogamesService) {
    this.videogames = [];
  }

  ngOnInit(): void {
    this.videogamesService.getVideogames().subscribe((videogame) => {
      this.videogames = videogame;
    })
  }

  deleteVideogame(id: any): void {
    this.videogamesService.deleteVideogame(id).subscribe(() => {
      console.log("---> DELETED");
    })
  }

  openModal(videogame?: Videogame) {
    if(videogame)
    {
      this.modal.videogame = videogame;
    }
    this.modal.toggleModal(); // Llama a la función del hijo
  }
}
