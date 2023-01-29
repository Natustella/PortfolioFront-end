import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-adminexperiencia',
  templateUrl: './adminexperiencia.component.html',
  styleUrls: ['./adminexperiencia.component.css']
})
export class AdminexperienciaComponent implements OnInit{
  experienciaList:any
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.experienciaList=data.experiencia;
  })
}
}
