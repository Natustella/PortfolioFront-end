import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private sskills:SkillsService, private router: Router) {}

  ngOnInit(): void {
    this.cargarSkills();
  }
  cargarSkills():void{
    this.sskills.lista().subscribe(data =>
      {this.skills=data})
  }

  delete(id:any){
    let elim = confirm("Desea eliminar esta habilidad?");
    if (elim == true){
    this.sskills.delete(id).subscribe(data =>{
      alert("Habilidad eliminada correctamente")
      location.reload();
    }, err =>{
      alert("No se pudo eliminar esta habilidad")
    }) 
  }
}
}