import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  get Mail(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  get MailInvalid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  get PasswordInvalid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  onSubmit() {
    if (this.form.valid) {
      let email = this.form.get('email')?.value;
      let password = this.form.get('password')?.value;
      // Valido con TypeScipt por falta de tiempo
      if (email == "natustella@gmail.com" && password == "123456") {
        this.router.navigate(['/admin']); // Redirecciona a la ruta admin
      } else {
        alert("Datos incorrectos");
      }
    }
  } 
}
