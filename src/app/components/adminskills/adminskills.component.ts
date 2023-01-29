import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-adminskills',
  templateUrl: './adminskills.component.html',
  styleUrls: ['./adminskills.component.css']
})
export class AdminskillsComponent implements OnInit{
  skillsList:any = []
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.skillsList=data.skills;
  })
}
}