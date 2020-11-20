import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/models/event.model';
import {BbddService} from '../../servicios/bbdd.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})

export class EventoComponent implements OnInit {

  EventList:Evento[] = [];
  EvenMod : Evento;
  Opcion : string = 'Eventos';

  constructor(private bbdd : BbddService) {
  }

  ngOnInit() {
    this.EventList = this.bbdd.geteventlist();
  }

  ngAfterViewInit(){
    this.EventList = this.bbdd.geteventlist();
  }

  CambioOp(Opcion : string){
    this.Opcion = Opcion ;
  }

  Get(event:Evento){
    this.EvenMod = event;
  }

  Eliminar(i : number){
    this.bbdd.spliteventlist(i);
  }

}
