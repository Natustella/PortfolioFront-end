import { Component, OnInit } from '@angular/core';
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
  idEditar: number | undefined;
  isTrue: Boolean = false;

  constructor(public spersona:MpersonaService) {}

  ngOnInit(): void {

    this.cargarPersona();
  }
  
  cargarPersona():void{
    this.spersona.detail(1).subscribe(data => 
      {this.persona=data});
  }
  idEdit(id:number): void{
    this.isTrue = true;
    this.idEditar = id;
  }

  delete(id:number){
    if(id != undefined){
      this.spersona.delete(id).subscribe(data =>{
        this.cargarPersona();
      }, err =>{
        alert("no se pudo eliminar la Persona")
      }) 
    }
  }
  }
  