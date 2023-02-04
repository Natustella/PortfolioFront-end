import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalskills',
  templateUrl: './modalskills.component.html',
  styleUrls: ['./modalskills.component.css']
})
export class ModalskillsComponent implements OnInit{
  skillsForm! : FormGroup

  constructor(private readonly fb:FormBuilder){}

  ngOnInit(): void {
    this.skillsForm = this.initForm();
  }

  onSubmit() : void{
    console.log('Form ->');
  }

  initForm() : FormGroup{
    return this.fb.group({
      percent: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      habilidad: ['', [Validators.required]],
    })
  }

}
