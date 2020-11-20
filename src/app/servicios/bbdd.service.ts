import { Injectable } from '@angular/core';
import { Evento } from 'src/app/models/event.model';
import { DudesMaker } from 'src/app/models/quien.model';

@Injectable({
  providedIn: 'root'
})
export class BbddService {

  EventList:Evento[] = [];
  Event : Evento;
  Equipo : DudesMaker[]=[];
  Persona : DudesMaker;

  constructor(){
    this.filleventlist();
  }

  //Funcion para añadir al abir la pagina los eventos y las personas del apartado "Qui som"
  filleventlist(){
    this.EventList.push(new Evento('Teatro Aburrido', 'Madrid','teatoaburrido@gmail.com','Es teatro que rollo'));
    this.EventList.push(new Evento('Festival de Cine', 'Lleida','paeria@gmail.com','Evento de cine al aire libre'));
    this.Equipo.push(new DudesMaker('Daniel','Garcia',22,'assets/img/trabajador.png','Jefazo'));
    this.Equipo.push(new DudesMaker('Currito','1',20,'assets/img/trabajador.png','El trabajador 1'));
    this.Equipo.push(new DudesMaker('Currito','2',21,'assets/img/trabajador.png','El trabajador 2'));
    this.Equipo.push(new DudesMaker('Currito','3',22,'assets/img/trabajador.png','El trabajador 3'));
    this.Equipo.push(new DudesMaker('Currito','4',23,'assets/img/trabajador.png','El trabajador 4'));
  }

  //Getters
  getevent():Evento{
    return this.Event;
  }

  geteventlist():Evento[]{
    return this.EventList;
  }

  getequipolist():DudesMaker[]{
    return this.Equipo;
  }

  //Setter
  seteventlist(evento):void{
    this.EventList = evento;
  }

  //Añadir elemento al array
  addeventlist(evento):void{
    this.EventList.push(evento);
  }
  //Eliminar elemento del array
  spliteventlist(i):void{
    this.EventList.splice(i,1);
  }



}
