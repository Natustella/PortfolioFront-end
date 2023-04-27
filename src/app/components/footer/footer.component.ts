import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
   this.contactForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form ->');
  }

  initForm():FormGroup{
    return this.fb.group({
      email:['', [Validators.required, Validators.email]],
      phone:['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      message:['', [Validators.required, Validators.minLength(15)]],
    })

  }

}