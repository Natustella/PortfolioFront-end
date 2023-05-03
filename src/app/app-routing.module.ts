import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { IndexComponent } from './components/index/index.component';
import { Pag404Component } from './components/pag404/pag404.component';
import { EditcursosComponent } from './modalesadmin/editcursos/editcursos.component';
import { EditexperienciaComponent } from './modalesadmin/editexperiencia/editexperiencia.component';
import { EditredesComponent } from './modalesadmin/editredes/editredes.component';
import { EditproyectosComponent } from './modalesadmin/editproyectos/editproyectos.component';
import { EditskillsComponent } from './modalesadmin/editskills/editskills.component';
import { ModaldatosComponent } from './modalesadmin/modaldatos/modaldatos.component';


const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin/curso/editar/:id', component: EditcursosComponent},
  { path: 'admin/experiencia/editar/:id', component: EditexperienciaComponent},
  { path: 'admin/redes/editar/:id', component: EditredesComponent},
  { path: 'admin/proyecto/editar/:id', component: EditproyectosComponent},
  { path: 'admin/skills/editar/:id', component: EditskillsComponent},
  { path: 'admin/persona/editar/:id', component: ModaldatosComponent},
  { path: '**', component: Pag404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
