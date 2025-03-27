import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'catalog', component: CatalogComponent},
    {path:'catalog/details/:id', component: DetailsComponent}
];
