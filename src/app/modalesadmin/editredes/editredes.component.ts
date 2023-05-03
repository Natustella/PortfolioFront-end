import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-editredes',
  templateUrl: './editredes.component.html',
  styleUrls: ['./editredes.component.css']
})
export class EditredesComponent implements OnInit{
  form: FormGroup;
  redes: Redes[] = []

  constructor(private fb: FormBuilder, 
              private sredes: RedesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              ){

    this.form = this.fb.group ({
      id: [''],
      url: ['', [Validators.required]],
      icoFont: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    //Obtengo la exp para editar desde la base de datos usando el parámetro id de la ruta
    const redesId = this.activatedRoute.snapshot.params['id'];
    this.sredes.lista().subscribe(data => {
      this.redes = data;
      //Una vez que accede a los datos, encuentra el elemento con la misma identificación 
      //para parchear los campos de formulario con su información.
      const element = this.redes.find(item => item.id === parseInt(redesId));
      this.form.patchValue({
        id: element?.id,
        url: element?.url,
        icoFont: element?.icoFont,
      });
    });
  }

  get Url() {
    return this.form.get("url")
  }

  get IcoFont() {
    return this.form.get("icoFont")
  }

  onEnviar() {
    const redes: Redes = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      url: this.form.value.url,
      icoFont: this.form.value.icoFont,
    };
    this.sredes.edit(redes).subscribe(() => {
      console.log(redes);
    })
    alert("Red Social cargada correctamente!")
    this.router.navigate(['admin']);
  }
  
}


