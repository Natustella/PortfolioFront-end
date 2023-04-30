import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/servicios/curso.service';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-admincursos',
  templateUrl: './admincursos.component.html',
  styleUrls: ['./admincursos.component.css']
})
export class AdmincursosComponent implements OnInit{
  curso:Curso[] = [];

  constructor(private scurso:CursoService, private router: Router) {}

  ngOnInit(): void {
    this.cargarCurso();
  }
  cargarCurso():void{
    this.scurso.lista().subscribe(data =>
      {this.curso=data});
  }

  delete(id:any){
    let elim = confirm("Desea eliminar este elemento?");
    if (elim == true){
      this.scurso.delete(id).subscribe(data =>{
        alert("Curso eliminado correctamente")
        location.reload();
        //this.cargarCurso();
      }, err =>{
        alert("No se pudo eliminar el curso");
      }) 
    }
  }
}  
/*delete(id:number){
  if(id != undefined){
    this.sexperiencia.delete(id).subscribe(data =>{
      this.cargarExperiencia();
    }, err =>{
      alert("No se pudo eliminar la experiencia")
    }) 
  }
}*/