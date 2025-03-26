import { Component } from '@angular/core';
import { VideogamesListComponent } from '../../components/videogames-list/videogames-list.component';

@Component({
  selector: 'app-catalog',
  imports: [VideogamesListComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

}
