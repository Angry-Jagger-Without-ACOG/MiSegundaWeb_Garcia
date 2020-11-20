import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Evento } from 'src/app/models/event.model';
import { BbddService } from '../../../servicios/bbdd.service';

@Component({
  selector: 'app-alta',
  templateUrl: './al_evento.component.html',
  styleUrls: ['./al_evento.component.css']
})

export class AltaComponent implements OnInit {

  @Output() insert = new EventEmitter<string>();

  constructor(private bbdd: BbddService) {
  }

  ngOnInit() {
  }

  //Funcion encargada de crear un Evento nuevo y vacia el formulaio para usar-lo de forma indefinida
  Crear(nombre,local,correo,info,ok){

    if (ok = true) {
      this.bbdd.addeventlist(new Evento(nombre.value, local.value, correo.value, info.value));
      nombre.value="";
      local.value="";
      correo.value="";
      info.value ="";
      ok.value = false;
    }

  }
 //Funcion para mostrar la pagina principal de eventos
  Volver():void{
    this.insert.emit('Eventos');
  }

}
