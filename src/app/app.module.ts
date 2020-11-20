import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/header.component';
import { InicioComponent } from './Components/Inicio/inicio.component';
import { EventoComponent } from './Components/Eventos/evento.component';
import { AltaComponent } from './Components/Eventos/Alta_Evento/al_evento.component';
import { QuienComponent } from './Components/Quien/quien.component';
import { ModificarComponent } from './Components/Eventos/Modificar_Evento/modificar-evento.component';
import { BbddService } from './servicios/bbdd.service';
import { PerfilComponent } from './Components/Quien/Perfil/perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    EventoComponent,
    AltaComponent,
    QuienComponent,
    ModificarComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BbddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
