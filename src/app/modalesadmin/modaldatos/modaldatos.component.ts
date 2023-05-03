import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mpersona } from 'src/app/model/mpersona';
import { MpersonaService } from 'src/app/servicios/mpersona.service';

@Component({
  selector: 'app-modaldatos',
  templateUrl: './modaldatos.component.html',
  styleUrls: ['./modaldatos.component.css']
})
export class ModaldatosComponent implements OnInit{
  form: FormGroup;
  persona: Mpersona [] = []

  constructor(private fb: FormBuilder, 
              private spersona:MpersonaService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              ){

    this.form = this.fb.group ({
      id: [''],
      imgMe: [''],
      nombre: [''],
      position: [''],
      ubicacion: [''],
      sobreMi:['']
    })
  }

ngOnInit(): void {
    const personaId = this.activatedRoute.snapshot.params['id'];
    this.spersona.lista().subscribe(data => {
      this.persona = data;
      const element = this.persona.find(item => item.id === parseInt (personaId));
      this.form.patchValue({
        id: element!.id,
        imgMe: element?.imgMe,
        nombre: element?.nombre,
        position: element?.position,
        ubicacion: element?.ubicacion,
        sobreMi: element?.sobreMi,
      })
    })
  
  }
  get ImgMe() {
    return this.form.get("imgMe")
  }

  get Nombre() {
    return this.form.get("nombre")
  }

  get Position() {
    return this.form.get("position")
  }

  get Ubicacion() {
    return this.form.get("ubicacion")
  }

  get SobreMi() {
    return this.form.get("sobreMi")
  }


  onEnviar() {
    const persona: Mpersona = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      imgMe: this.form.value.imgMe,
      nombre: this.form.value.nombre,
      position: this.form.value.position,
      ubicacion: this.form.value.ubicacion,
      sobreMi: this.form.value.sobreMi,
    };
    this.spersona.edit(persona).subscribe(() => {
      console.log(persona);
    })
    alert("Datos modificados correctamente")
    this.router.navigate(['admin']);
  }
}


