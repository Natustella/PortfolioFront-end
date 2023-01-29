import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-admincursos',
  templateUrl: './admincursos.component.html',
  styleUrls: ['./admincursos.component.css']
})
export class AdmincursosComponent implements OnInit{
  cursosList:any
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.cursosList=data.cursos;
  })
}
}