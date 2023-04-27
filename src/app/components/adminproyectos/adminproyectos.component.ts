import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';


@Component({
  selector: 'app-adminproyectos',
  templateUrl: './adminproyectos.component.html',
  styleUrls: ['./adminproyectos.component.css']
})
export class AdminproyectosComponent implements OnInit{
  proyecto:Proyecto[] = [];
  idEditar: number | undefined;
  isTrue: Boolean = false;

  constructor(public sproyecto:ProyectoService) {}

  ngOnInit(): void {
    this.cargarProyecto();
  }
  cargarProyecto():void{
    this.sproyecto.lista().subscribe(data =>
      {this.proyecto=data});
  }
  idEdit(id:number): void{
    this.isTrue = true;
    this.idEditar = id;
  }

  delete(id:number){
    if(id != undefined){
      this.sproyecto.delete(id).subscribe(data =>{
        this.cargarProyecto();
      }, err =>{
        alert("No se pudo eliminar el proyecto")
      }) 
    }
  }
  }