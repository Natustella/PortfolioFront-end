import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.css']
})
export class EditskillsComponent implements OnInit {
  form: FormGroup;
  skills: Skills[] = []

  constructor(private fb: FormBuilder,
              private sskills: SkillsService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
  ){

    this.form = this.fb.group({
      id: [''],
      percent: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.max(100), Validators.min(1)]],
      habilidad: ['', [Validators.required]],
    }); 
  }

  ngOnInit(): void {
    //Obtengo la habilidad para editar desde la base de datos usando el parámetro id de la ruta
    const skillsId = this.activatedRoute.snapshot.params['id'];
    this.sskills.lista().subscribe(data => {
      this.skills = data;
      //Una vez que accede a los datos, encuentra el elemento con la misma identificación 
      //para parchear los campos de formulario con su información.
      const element = this.skills.find(item => item.id === parseInt(skillsId));
      this.form.patchValue({
        id: element?.id,
        percent: element?.percent,
        habilidad: element?.habilidad,
      });
    });
  }

  get Percent() {
    return this.form.get("percent")
  }

  get Habilidad() {
    return this.form.get("habilidad")
  }
  
  onEnviar() {
    const skills: Skills = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      percent: this.form.value.percent,
      habilidad: this.form.value.habilidad,
    };
    this.sskills.edit(skills).subscribe(() => {
      console.log(skills);
    })
    alert("Habilidad cargada correctamente!")
    this.router.navigate(['admin']);
  }
}



