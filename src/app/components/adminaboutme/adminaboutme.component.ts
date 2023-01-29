import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-adminaboutme',
  templateUrl: './adminaboutme.component.html',
  styleUrls: ['./adminaboutme.component.css']
})
export class AdminaboutmeComponent implements OnInit{
  miPortfolio:any;
aboutme: any;
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.aboutme = data.aboutme;
  })
}
}