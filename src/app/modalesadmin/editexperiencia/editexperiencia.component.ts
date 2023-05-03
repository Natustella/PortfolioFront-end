import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent implements OnInit {
  form: FormGroup;
  experiencia: Experiencia[] = []

  constructor(private fb: FormBuilder,
    private sExp: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

    this.form = this.fb.group({
      id: [''],
      pos: ['', [Validators.required]],
      logo: [''],
      empresa: ['', [Validators.required]],
      desde: ['', [Validators.required]],
      hasta: ['', [Validators.required]],
      actividad: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    //Obtengo la exp para editar desde la base de datos usando el parámetro id de la ruta
    const experienciaId = this.activatedRoute.snapshot.params['id'];
    this.sExp.lista().subscribe(data => {
      this.experiencia = data;
      //Una vez que accede a los datos, encuentra el elemento con la misma identificación 
      //para parchear los campos de formulario con su información.
      const element = this.experiencia.find(item => item.id === parseInt(experienciaId));
      this.form.patchValue({
        id: element?.id,
        pos: element?.pos,
        logo: element?.logo,
        empresa: element?.empresa,
        desde: element?.desde,
        hasta: element?.hasta,
        actividad: element?.actividad
      });
    });
  }

  get Pos() {
    return this.form.get("pos")
  }
  get Logo() {
    return this.form.get("logo")
  }

  get Empresa() {
    return this.form.get("empresa")
  }

  get Desde() {
    return this.form.get("desde")
  }

  get Hasta() {
    return this.form.get("hasta")
  }

  get Actividad() {
    return this.form.get("actividad")
  }

  onEnviar() {
    const experiencia: Experiencia = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      pos: this.form.value.pos,
      logo: this.form.value.logo,
      empresa: this.form.value.empresa,
      desde: this.form.value.desde,
      hasta: this.form.value.hasta,
      actividad: this.form.value.actividad,
    };
    this.sExp.edit(experiencia).subscribe(() => {
      console.log(experiencia);
    })
    alert("Experiencia cargada correctamente!")
    this.router.navigate(['admin']);
  }
}