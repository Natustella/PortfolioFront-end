import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalcursos',
  templateUrl: './modalcursos.component.html',
  styleUrls: ['./modalcursos.component.css']
})
export class ModalcursosComponent implements OnInit {
  cursosForm! : FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.cursosForm = this.initForm();    
  }

  onSubmit() : void {
    console.log('Form ->');
  }

  initForm() : FormGroup{
    return this.fb.group ({
      titulo: ['', [Validators.required]],
      dado: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
    })
  }
}