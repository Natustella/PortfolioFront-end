import { Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/model/redes';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
redes: Redes[] = [];
  constructor(public sredes:RedesService) { }

  ngOnInit(): void {

    this.cargarRedes();
  }
  cargarRedes(): void{
    this.sredes.lista().subscribe(data =>
      {this.redes=data});
  }
}