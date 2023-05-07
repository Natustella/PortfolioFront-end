import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyecto:Proyecto[] = [];
  constructor(private sproyecto:ProyectoService) {}

  ngOnInit(): void {
    this.cargarProyecto();
  }
  cargarProyecto():void{
    this.sproyecto.lista().subscribe(data =>
      {this.proyecto=data});
  }
}