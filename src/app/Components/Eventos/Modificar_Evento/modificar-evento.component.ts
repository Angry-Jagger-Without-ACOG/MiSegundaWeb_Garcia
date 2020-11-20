import { Component, OnInit,Output,Input, EventEmitter } from '@angular/core';
import { Evento } from 'src/app/models/event.model';
import { BbddService } from '../../../servicios/bbdd.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar-evento.component.html',
  styleUrls: ['./modificar-evento.component.css']
})
export class ModificarComponent implements OnInit {

  @Output() modif = new EventEmitter<string>();

  @Input() EventoEntrada: Evento;
  // Se le pasa un evento y se le introducen los valores del evento selecionado, como valores predeterminados

  constructor(private bbdd: BbddService) {
  }

  ngOnInit(): void {
  }

  //Funcion que recoge los campos del formulario y sobreescribe los valores del evento
  Modificar(vNombre,vLocal,vCorreo,vInfo):void{
    this.EventoEntrada.Nombre = vNombre;
    this.EventoEntrada.Localizacion = vLocal;
    this.EventoEntrada.Correo = vCorreo;
    this.EventoEntrada.Info = vInfo;
    this.modif.emit('Eventos');
  }
}
