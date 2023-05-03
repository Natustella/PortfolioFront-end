import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'jquery';
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

  constructor(private sredes:RedesService, private router: Router) { }

  ngOnInit(): void {

    this.cargarRedes();
  }
  cargarRedes(): void{
    this.sredes.lista().subscribe(data =>
      {this.redes=data});
  }

  delete(id:any){
    let elim = confirm("Desea eliminar esta Red Social?");
    if (elim == true){
      this.sredes.delete(id).subscribe(data =>{
        alert("Red Social eliminada correctamente")
        location.reload();
      }, err =>{
        alert("No se pudo eliminar esta Red Social")
      });
    }
  }
}
