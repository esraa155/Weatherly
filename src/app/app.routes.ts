import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { NgModule } from '@angular/core';
import { CityDetailsComponent } from './components/city-details/city-details.component';

export const routes: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'home', component: CityDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
    // Define other routes here
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}