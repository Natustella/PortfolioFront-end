import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/servicios/curso.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  curso:Curso[] = [];
  constructor(private scurso:CursoService) {}

  ngOnInit(): void {
    this.cargarCurso();
  }
  cargarCurso():void{
    this.scurso.lista().subscribe(data =>
      {this.curso=data});
  }
}

