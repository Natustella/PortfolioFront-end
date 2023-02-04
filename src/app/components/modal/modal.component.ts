import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit(): void {
  }

  get Mail(){
    return this.form.get("email");
   }

   get Password(){
    return this.form.get("password");
  }

  get MailInvalid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  get PasswordInvalid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  onEnviar(event: Event){
    event.preventDefault; 
 
    if (this.form.valid){
    }else{
      this.form.markAllAsTouched(); 
    }
  }
}