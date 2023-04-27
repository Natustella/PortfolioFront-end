import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-modalredes',
  templateUrl: './modalredes.component.html',
  styleUrls: ['./modalredes.component.css']
})
export class ModalredesComponent implements OnInit{
  form: FormGroup;
  url: string = '';
  icoFont: string = '';

  constructor(private readonly fb: FormBuilder, private sredes: RedesService){
    this.form = this.fb.group ({
      url: ['', [Validators.required]],
      icoFont: ['', [Validators.required]],
    }) 
  }

  ngOnInit(): void {
  }

  get Url() {
    return this.form.get("url")
  }

  get IcoFont() {
    return this.form.get("icoFont")
  }

  onCreate(): void {
    const redes = new Redes(this.url, this.icoFont);    
    this.sredes.save(redes).subscribe(data => {
      alert("Nueva Red Social añadida");
      window.location.reload();
    }, err =>{
      alert("no se cargó la Red Social, intente nuevamente");
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
