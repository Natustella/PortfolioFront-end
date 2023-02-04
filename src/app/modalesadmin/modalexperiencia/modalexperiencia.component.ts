import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalexperiencia',
  templateUrl: './modalexperiencia.component.html',
  styleUrls: ['./modalexperiencia.component.css']
})
export class ModalexperienciaComponent implements OnInit {
  experienciaForm! : FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.experienciaForm = this.initForm();
  }

  onSubmit() : void {
    console.log('Form ->');
  }

  initForm() : FormGroup{
    return this.fb.group({
      posicion: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      desde: ['', [Validators.required]],
      hasta: ['', [Validators.required]],
      actividad: ['', [Validators.required]],
    })
  }
}