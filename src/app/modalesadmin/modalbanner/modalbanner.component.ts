import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalbanner',
  templateUrl: './modalbanner.component.html',
  styleUrls: ['./modalbanner.component.css']
})
export class ModalbannerComponent implements OnInit {
  bannerForm! : FormGroup

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.bannerForm = this.initForm();
  }

  onSubmit() : void {
    console.log('Form ->');
  }

  initForm() : FormGroup{
    return this.fb.group({
      banner: ['', [Validators.required]],
    })
  }

}