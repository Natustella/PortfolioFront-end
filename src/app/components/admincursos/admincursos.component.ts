import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/servicios/curso.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-admincursos',
  templateUrl: './admincursos.component.html',
  styleUrls: ['./admincursos.component.css']
})
export class AdmincursosComponent implements OnInit{
  curso:Curso[] = [];
  idEditar: number | undefined;
  isTrue: Boolean = false;

  constructor(public scurso:CursoService) {}

  ngOnInit(): void {
    this.cargarCurso();
  }
  cargarCurso():void{
    this.scurso.lista().subscribe(data =>
      {this.curso=data});
  }
  idEdit(id:number): void{
    this.isTrue = true;
    this.idEditar = id;
  }

  delete(id:number){
    if(id != undefined){
      this.scurso.delete(id).subscribe(data =>{
        this.cargarCurso();
      }, err =>{
        alert("No se pudo eliminar el curso")
      }) 
    }
  }
}