import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modaldatos',
  templateUrl: './modaldatos.component.html',
  styleUrls: ['./modaldatos.component.css']
})
export class ModaldatosComponent implements OnInit{
 datosForm! : FormGroup;

  constructor(private readonly fb: FormBuilder){}

  ngOnInit(): void {
    this.datosForm = this.initForm();
  }

  onSubmit() : void {
    console.log('Form ->');
  }

  initForm() : FormGroup{
    return this.fb.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]]
    })
  }
}
