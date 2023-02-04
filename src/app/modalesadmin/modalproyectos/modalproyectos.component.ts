import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalproyectos',
  templateUrl: './modalproyectos.component.html',
  styleUrls: ['./modalproyectos.component.css']
})
export class ModalproyectosComponent implements OnInit{
  proyectoForm! : FormGroup;

  constructor(private readonly fb: FormBuilder){}

  ngOnInit(): void {
    this.proyectoForm = this.initForm();
  }

  onSubmit() : void {
    console.log('Form ->');
  }

  initForm() : FormGroup{
    return this.fb.group({
      descripcion:['', [Validators.required, Validators.minLength(15)]]
    })
  }
}
