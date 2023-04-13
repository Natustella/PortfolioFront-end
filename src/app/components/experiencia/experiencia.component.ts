import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experiencia: Experiencia[] = []; 
  constructor(public sexperiencia:ExperienciaService) {}

  ngOnInit(): void {

    this.cargarExperiencia();
  }
  cargarExperiencia():void{
    this.sexperiencia.lista().subscribe(data => 
      {this.experiencia=data});
  }
}
