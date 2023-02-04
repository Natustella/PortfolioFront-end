import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalaboutme',
  templateUrl: './modalaboutme.component.html',
  styleUrls: ['./modalaboutme.component.css']
})
export class ModalaboutmeComponent implements OnInit {
  aboutForm! : FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.aboutForm = this.initForm();
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

