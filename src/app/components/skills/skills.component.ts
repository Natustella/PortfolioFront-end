import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skills:Skills[]=[];
  constructor(private sskills:SkillsService) {}

  ngOnInit(): void {
    this.cargarSkills();
  }
  cargarSkills():void{
    this.sskills.lista().subscribe(data =>
      {this.skills=data})
  }
}