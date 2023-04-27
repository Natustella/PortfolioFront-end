import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mpersona } from 'src/app/model/mpersona';
import { MpersonaService } from 'src/app/servicios/mpersona.service';

@Component({
  selector: 'app-modaldatos',
  templateUrl: './modaldatos.component.html',
  styleUrls: ['./modaldatos.component.css']
})
export class ModaldatosComponent implements OnInit{
  personaData: Mpersona;
  form: FormGroup;
  imgMe: string = '';
  nombre: string = '';
  position: string = '';
  ubicacion: string = '';
  sobreMi: string = '';

  constructor(private readonly fb: FormBuilder, private persona:MpersonaService){
    this.form = this.fb.group ({
      imgMe: [''],
      nombre: ['', [Validators.required]],
      position: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],
      sobreMi:['', [Validators.required, Validators.minLength(15)]]
    })
    this.personaData = new Mpersona('', '', '', '', '');
  }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona():void{
    this.persona.detail(1).subscribe(data => {
      this.personaData = data;
    });
    
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

  onCreate(): void {
    const persona = new Mpersona(this.imgMe, this.nombre, this.position, this.ubicacion, this.sobreMi);    
    this.persona.save(persona).subscribe(data => {
      alert("Nuevos datos añadidos");
      window.location.reload();
    }, err =>{
      alert("No se cargaron los nuevos datos, intente nuevamente");
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


  delete(id:number){
    if(id != undefined){
      this.persona.delete(id).subscribe(data =>{
        this.cargarPersona();
      }, err =>{
        alert("No se pudieron eliminar los datos")
      }) 
    }
  }

}

