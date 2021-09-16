import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanetasComponent } from './planetas/planetas.component';

const routes: Routes = [
{ path: 'home', component:HomeComponent},
{ path: 'planetas', component:PlanetasComponent},
{ path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
