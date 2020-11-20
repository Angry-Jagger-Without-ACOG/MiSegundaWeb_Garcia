import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DudesMaker } from 'src/app/models/quien.model';
import { BbddService } from '../../../servicios/bbdd.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

  @Input() PersonaSelecionada:DudesMaker;
  @Output() Atras = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  //Funcion para cerrar la tarjeta de miembro del equipo, devolviendo un null de manera que no habra nada que mostrar
  //No necesario cerrar la tarjeta actual para ver la de otro miembro del equipo
  Volver():void{
    this.Atras.emit(null);
  }

}
