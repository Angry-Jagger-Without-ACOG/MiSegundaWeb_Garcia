import { Component, OnInit } from '@angular/core';
import { DudesMaker } from 'src/app/models/quien.model';
import { BbddService } from '../../servicios/bbdd.service';

@Component({
  selector: 'app-quien',
  templateUrl: './quien.component.html',
  styleUrls: ['./quien.component.css']
})

export class QuienComponent implements OnInit {

  Equipo: DudesMaker[];
  Persona: DudesMaker = null;

  constructor(private bbdd: BbddService) { }


  ngOnInit() {
    this.Equipo = this.bbdd.getequipolist();
  }


  Get(persona: DudesMaker) {
    this.Persona = persona;
  }


}
