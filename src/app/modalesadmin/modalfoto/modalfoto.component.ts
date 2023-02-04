import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalfoto',
  templateUrl: './modalfoto.component.html',
  styleUrls: ['./modalfoto.component.css']
})
export class ModalfotoComponent implements OnInit{
  fotoForm! : FormGroup;

  constructor(private readonly fb: FormBuilder){};

  ngOnInit(): void {
    this.fotoForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form ->');
  }

  initForm() : FormGroup{
    return this.fb.group({
      foto: ['', [Validators.required]]
    })
  }

}
