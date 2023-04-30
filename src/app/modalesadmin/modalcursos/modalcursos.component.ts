import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/servicios/curso.service';

@Component({
  selector: 'app-modalcursos',
  templateUrl: './modalcursos.component.html',
  styleUrls: ['./modalcursos.component.css']
})
export class ModalcursosComponent implements OnInit {
  form: FormGroup;
  titulo: string = '';
  imag: string = '';
  dado: string = '';
  fecha: string = '';

  constructor(private fb: FormBuilder, private scurso:CursoService) {
   
  this.form = this.fb.group ({
    titulo: ['', [Validators.required]],
    imag: [''],
    dado: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
  }) 
  }

  ngOnInit(): void {
}

  get Titulo() {
    return this.form.get("titulo")
  }

  get Imag() {
    return this.form.get("imag")
  }

  get Dado() {
    return this.form.get("dado")
  }

  get Fecha() {
    return this.form.get("fecha")
  }

  onCreate(): void {
    const curso = new Curso(this.titulo, this.imag, this.dado, this.fecha);    
    this.scurso.save(curso).subscribe(data => {
      alert("Nuevo curso añadido");
      window.location.reload();
    }, err =>{
      alert("No se cargó el nuevo curso, intente nuevamente");
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