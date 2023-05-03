import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private sexperiencia:ExperienciaService, private router: Router) {}

  ngOnInit(): void {

    this.cargarExperiencia();
  }
  cargarExperiencia():void{
    this.sexperiencia.lista().subscribe(data => 
      {this.experiencias=data});
  }

  delete(id:any){
      let elim = confirm("Desea eliminar esta experiencia?");
      if (elim == true){
      this.sexperiencia.delete(id).subscribe(data =>{
        alert("Experiencia eliminada correctamente")
        location.reload();
      }, err =>{
        alert("No se pudo eliminar la experiencia")
      }) 
    }
  }
}
  


