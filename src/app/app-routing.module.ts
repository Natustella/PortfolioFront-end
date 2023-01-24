import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { Pag404Component } from './components/pag404/pag404.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: '**', component: Pag404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
