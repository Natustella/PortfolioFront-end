import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-adminproyectos',
  templateUrl: './adminproyectos.component.html',
  styleUrls: ['./adminproyectos.component.css']
})
export class AdminproyectosComponent implements OnInit{
  proyectosList:any
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.proyectosList=data.proyectos;
  })
}
}