import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { IndexComponent } from './components/index/index.component';
import { Pag404Component } from './components/pag404/pag404.component';
import { ModalcursosComponent } from './modalesadmin/modalcursos/modalcursos.component';
import { EditcursosComponent } from './modalesadmin/editcursos/editcursos.component';


const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin/curso/editar/:id', component: EditcursosComponent},
  { path: '**', component: Pag404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
