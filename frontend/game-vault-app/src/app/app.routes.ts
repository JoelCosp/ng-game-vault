import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DetailsComponent } from './pages/details/details.component';
import { CrudComponent } from './pages/crud/crud.component';

export const routes: Routes = [
    {path:'', component: CatalogComponent},
    {path:'catalog', component: CatalogComponent},
    {path:'catalog/details/:id', component: DetailsComponent},
    {path:'crud', component: CrudComponent}
];
