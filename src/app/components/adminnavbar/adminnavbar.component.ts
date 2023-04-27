import { Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/model/redes';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {
  redes: Redes[] = [];
  idEditar: number | undefined;
  isTrue: Boolean = false;

  constructor(public sredes:RedesService) { }

  ngOnInit(): void {

    this.cargarRedes();
  }
  cargarRedes(): void{
    this.sredes.lista().subscribe(data =>
      {this.redes=data});
  }

  idEdit(id:number): void{
    this.isTrue = true;
    this.idEditar = id;
  }

  delete(id:number){
    if(id != undefined){
      this.sredes.delete(id).subscribe(data =>{
        this.cargarRedes();
      }, err =>{
        alert("no se pudo eliminar la Red Social")
      }) 
    }
  }
}
