import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit{
    miPortfolio:any;
    constructor(private datosPortfolio:PortfolioService){ 
        console.log("entre a init");
              this.datosPortfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.miPortfolio=data;
      });
    }

    ngOnInit() {
    }

    // ngOnInit(): void{
    //   console.log("entre a init");
      // this.datosPortfolio.obtenerDatos().subscribe(data =>{
      //   console.log(data);
      //   this.miPortfolio=data;
      // });
    }
