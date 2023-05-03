import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-editproyectos',
  templateUrl: './editproyectos.component.html',
  styleUrls: ['./editproyectos.component.css']
})
export class EditproyectosComponent implements OnInit {
  form: FormGroup;
  proyecto: Proyecto[] = []

  constructor(private fb: FormBuilder,
              private sproyecto: ProyectoService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
  ){

    this.form = this.fb.group({
      id: [''],
      descripcion:['', [Validators.required, Validators.minLength(15)]],
    });
  }

  ngOnInit(): void {
    //Obtengo el proyecto para editar desde la base de datos usando el parámetro id de la ruta
    const proyectoId = this.activatedRoute.snapshot.params['id'];
    this.sproyecto.lista().subscribe(data => {
      this.proyecto = data;
      //Una vez que accede a los datos, encuentra el elemento con la misma identificación 
      //para parchear los campos de formulario con su información.
      const element = this.proyecto.find(item => item.id === parseInt(proyectoId));
      this.form.patchValue({
        id: element?.id,
        descripcion: element?.descripcion,
      });
    });
  }

  get Descripcion() {
    return this.form.get("descripcion")
  }

  onEnviar() {
    const proyecto: Proyecto = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      descripcion: this.form.value.descripcion,
    };
    this.sproyecto.edit(proyecto).subscribe(() => {
      console.log(proyecto);
    })
    alert("Proyecto cargado correctamente!")
    this.router.navigate(['admin']);
  }
}

