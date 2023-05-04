import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private userServise: UserService) {
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

  onSubmit(){
    this.userServise.login(this.form.value)
     .then(response => {
      console.log(response);
     })
     .catch(err => console.log(err));
  }
  
}