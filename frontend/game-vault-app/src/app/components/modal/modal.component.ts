import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  isModal = false;

  toggleModal() {
    this.isModal = !this.isModal;
  }
}
