import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mpersona } from 'src/app/model/mpersona';
import { MpersonaService } from 'src/app/servicios/mpersona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-adminaboutme',
  templateUrl: './adminaboutme.component.html',
  styleUrls: ['./adminaboutme.component.css']
})
export class AdminaboutmeComponent implements OnInit{
  persona: Mpersona = new Mpersona(" "," "," "," "," ");

  constructor(public spersona:MpersonaService, private router: Router) {}

  ngOnInit(): void {

    this.cargarPersona();
  }
  
  cargarPersona():void{
    this.spersona.detail(1).subscribe(data => 
      {this.persona=data});
  }
}
  