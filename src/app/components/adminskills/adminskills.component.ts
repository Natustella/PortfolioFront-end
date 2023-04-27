import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-adminskills',
  templateUrl: './adminskills.component.html',
  styleUrls: ['./adminskills.component.css']
})
export class AdminskillsComponent implements OnInit{
  skills:Skills[]=[];
  idEditar: number | undefined;
  isTrue: Boolean = false;

  constructor(public sskills:SkillsService) {}

  ngOnInit(): void {
    this.cargarSkills();
  }
  cargarSkills():void{
    this.sskills.lista().subscribe(data =>
      {this.skills=data})
  }
  idEdit(id:number): void{
    this.isTrue = true;
    this.idEditar = id;
  }

  delete(id:number){
    if(id != undefined){
      this.sskills.delete(id).subscribe(data =>{
        this.cargarSkills();
      }, err =>{
        alert("No se pudo eliminar la habilidad")
      }) 
    }
  }
  }