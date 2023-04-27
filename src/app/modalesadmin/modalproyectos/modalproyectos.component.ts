import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-modalproyectos',
  templateUrl: './modalproyectos.component.html',
  styleUrls: ['./modalproyectos.component.css']
})
export class ModalproyectosComponent implements OnInit{
  form: FormGroup;
  descripcion: string = '';

  constructor(private fb: FormBuilder, private sproyecto: ProyectoService){
    this.form = this.fb.group ({
      descripcion:['', [Validators.required, Validators.minLength(15)]]
    })

  }

  ngOnInit(): void {
  }

  get Descripcion() {
    return this.form.get("descripcion")
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.descripcion);    
    this.sproyecto.save(proyecto).subscribe(data => {
      alert("Nuevo proyecto añadido");
      window.location.reload();
    }, err =>{
      alert("No se cargó el nuevo Proyecto, intente nuevamente");
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
