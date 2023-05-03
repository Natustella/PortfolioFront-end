import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public sproyecto:ProyectoService, private router: Router) {}

  ngOnInit(): void {
    this.cargarProyecto();
  }
  cargarProyecto():void{
    this.sproyecto.lista().subscribe(data =>
      {this.proyecto=data});
  }

  delete(id:any){
    let elim = confirm("Desea eliminar este proyecto?");
    if (elim == true){
    this.sproyecto.delete(id).subscribe(data =>{
      alert("Proyecto eliminado correctamente")
      location.reload();
    }, err =>{
      alert("No se pudo eliminar este proyecto")
    }) 
  }
}
}