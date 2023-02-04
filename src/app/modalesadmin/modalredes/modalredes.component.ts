import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalredes',
  templateUrl: './modalredes.component.html',
  styleUrls: ['./modalredes.component.css']
})
export class ModalredesComponent implements OnInit{
  redesForm! : FormGroup;

  constructor(private readonly fb: FormBuilder){}

  ngOnInit(): void {
    this.redesForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form ->');
  }

  initForm() : FormGroup{
    return this.fb.group({
      url: ['', [Validators.required]],
      icoFont: ['', [Validators.required]],
    })
  }
}
