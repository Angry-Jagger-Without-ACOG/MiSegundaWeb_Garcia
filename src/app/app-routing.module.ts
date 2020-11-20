import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Components/Inicio/inicio.component';
import { EventoComponent } from './Components/Eventos/evento.component';
import { QuienComponent } from './Components/Quien/quien.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: InicioComponent},
  { path: 'evento', component: EventoComponent},
  { path: 'quien', component: QuienComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
