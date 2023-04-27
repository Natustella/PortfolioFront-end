import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-adminexperiencia',
  templateUrl: './adminexperiencia.component.html',
  styleUrls: ['./adminexperiencia.component.css']
})
export class AdminexperienciaComponent implements OnInit{
  experiencias: Experiencia[] = []; 
  idEditar: number | undefined;
  isTrue: Boolean = false;

  constructor(public sexperiencia:ExperienciaService) {}

  ngOnInit(): void {

    this.cargarExperiencia();
  }
  cargarExperiencia():void{
    this.sexperiencia.lista().subscribe(data => 
      {this.experiencias=data});
  }

  idEdit(id:number): void{
    this.isTrue = true;
    this.idEditar = id;
  }

  delete(id:number){
    if(id != undefined){
      this.sexperiencia.delete(id).subscribe(data =>{
        this.cargarExperiencia();
      }, err =>{
        alert("No se pudo eliminar la experiencia")
      }) 
    }
  }
  }
  


