import { Component, OnInit } from '@angular/core';
import { Mpersona } from 'src/app/model/mpersona';
import { MpersonaService } from 'src/app/servicios/mpersona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit{
persona: Mpersona = new Mpersona(" "," "," "," "," ");
  constructor(private spersona:MpersonaService) {}

  ngOnInit(): void {

    this.cargarPersona();
  }
  
  cargarPersona():void{
    this.spersona.detail(1).subscribe(data => 
      {this.persona=data});
  }
  }

