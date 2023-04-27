import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-modalskills',
  templateUrl: './modalskills.component.html',
  styleUrls: ['./modalskills.component.css']
})
export class ModalskillsComponent implements OnInit{
  form: FormGroup;
  percent: number = 0;
  habilidad: string = '';

  constructor(private fb:FormBuilder, private skills: SkillsService){
    this.form = this.fb.group ({
      percent: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.max(100), Validators.min(1)]],
      habilidad: ['', [Validators.required]],
    })

  }

  ngOnInit(): void {
  }
  get Percent() {
    return this.form.get("percent")
  }

  get Habilidad() {
    return this.form.get("habilidad")
  }

  onCreate(): void {
    const skill = new Skills(this.percent, this.habilidad);    
    this.skills.save(skill).subscribe(data => {
      alert("Habilidad añadida");
      window.location.reload();
    }, err =>{
      alert("no se cargó la habilidad, intente nuevamente");
      this.form.reset();
    });
  }

  onEnviar(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.onCreate();
    } else {
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
