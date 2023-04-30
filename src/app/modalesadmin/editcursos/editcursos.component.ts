import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/servicios/curso.service';


@Component({
  selector: 'app-editcursos',
  templateUrl: './editcursos.component.html',
  styleUrls: ['./editcursos.component.css']
})
export class EditcursosComponent implements OnInit {
  form: FormGroup;
  curso: Curso[] = []

  constructor(private fb: FormBuilder,
    private sCurso: CursoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

    this.form = this.fb.group({
      id: [''],
      titulo: [''],
      imag: [''],
      dado: [''],
      fecha: [''],
    });
  }

  ngOnInit(): void {
  //Fetch the curso to edit from the database using the id parameter from the route
    const cursoId = this.activatedRoute.snapshot.params['id'];
    this.sCurso.lista().subscribe(data => {
      this.curso = data;
      //once acces to data, it finds the element with same id to patch form fields with its info.
      const element = this.curso.find(item => item.id === parseInt(cursoId));
      this.form.patchValue({
        id: element?.id,
       titulo: element?.titulo,
        imag: element?.imag,
        dado: element?.dado,
        fecha: element?.fecha
     });
    });
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

  /*onUpdate(): void {
    this.sCurso.edit(this.curso.id, this.form.value).subscribe(data => {
      alert("Curso modificado.");
      this.router.navigate(['']);
    });
  }*/

  /*onEnviar(event: Event) {
    console.log("onEnviar() se ha llamado");
    event.preventDefault();
    if (this.form.valid) {
      this.onUpdate();
    } else {
      alert("falló en la carga, intente nuevamente");
    }
  }*/

  onEnviar() {
    const curso: Curso = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      titulo: this.form.value.titulo,
      imag: this.form.value.imag,
      dado: this.form.value.dado,
      fecha: this.form.value.fecha,
    };
    this.sCurso.edit(curso).subscribe(() => {
      console.log(curso);
    })
    alert("Curso cargado correctamente!")
    this.router.navigate(['admin']);
  }

}
