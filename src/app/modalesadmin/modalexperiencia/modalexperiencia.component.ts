import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
  
@Component({
  selector: 'app-modalexperiencia',
  templateUrl: './modalexperiencia.component.html',
  styleUrls: ['./modalexperiencia.component.css']
})
export class ModalexperienciaComponent implements OnInit {
   form: FormGroup;
   pos: string = '';
   logo: string ='';
   empresa: string ='';
   desde: string = '';
   hasta: string ='';
   actividad: string ='';

  constructor(private fb: FormBuilder, private sexperiencia: ExperienciaService) { 

  this.form = this.fb.group ({
      pos: ['', [Validators.required]],
      logo: [''],
      empresa: ['', [Validators.required]],
      desde: ['', [Validators.required]],
      hasta: ['', [Validators.required]],
      actividad: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  get Pos() {
    return this.form.get("posicion")
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

  onCreate(): void {
    const exp = new Experiencia(this.pos, this.logo, this.empresa, this.desde, this.hasta, this.actividad);    
    this.sexperiencia.save(exp).subscribe(data => {
      alert("Nueva experiencia añadida");
      window.location.reload();
    }, err =>{
      alert("No se cargó la nueva experiencia, intente nuevamente");
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
