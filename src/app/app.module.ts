import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ModalComponent } from './components/modal/modal.component';
import { RedesComponent } from './components/redes/redes.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { IndexComponent } from './components/index/index.component';
import { Pag404Component } from './components/pag404/pag404.component';
import { LoginComponent } from './components/login/login.component';
import { ModalexperienciaComponent } from './modalesadmin/modalexperiencia/modalexperiencia.component';
import { ModalcursosComponent } from './modalesadmin/modalcursos/modalcursos.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdmincursosComponent } from './components/admincursos/admincursos.component';
import { AdminexperienciaComponent } from './components/adminexperiencia/adminexperiencia.component';
import { ModalskillsComponent } from './modalesadmin/modalskills/modalskills.component';
import { AdminskillsComponent } from './components/adminskills/adminskills.component';
import { AdminproyectosComponent } from './components/adminproyectos/adminproyectos.component';
import { ModalproyectosComponent } from './modalesadmin/modalproyectos/modalproyectos.component';
import { AdminaboutmeComponent } from './components/adminaboutme/adminaboutme.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { AdminlogoutComponent } from './components/adminlogout/adminlogout.component';
import { ModalredesComponent } from './modalesadmin/modalredes/modalredes.component';
import { ModaldatosComponent } from './modalesadmin/modaldatos/modaldatos.component';
import { EditcursosComponent } from './modalesadmin/editcursos/editcursos.component';
import { EditexperienciaComponent } from './modalesadmin/editexperiencia/editexperiencia.component';
import { EditredesComponent } from './modalesadmin/editredes/editredes.component';
import { EditproyectosComponent } from './modalesadmin/editproyectos/editproyectos.component';
import { EditskillsComponent } from './modalesadmin/editskills/editskills.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment.development';


@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    BannerComponent,
    NavbarComponent,
    ExperienciaComponent,
    CursosComponent,
    SkillsComponent,
    ModalComponent,
    RedesComponent,
    FooterComponent,
    ProyectosComponent,
    IndexComponent,
    Pag404Component,
    LoginComponent,
    ModalexperienciaComponent,
    ModalcursosComponent,
    AdminComponent,
    AdmincursosComponent,
    AdminexperienciaComponent,
    ModalskillsComponent,
    AdminskillsComponent,
    AdminproyectosComponent,
    ModalproyectosComponent,
    AdminaboutmeComponent,
    AdminnavbarComponent,
    AdminlogoutComponent,
    ModalredesComponent,
    ModaldatosComponent,
    EditcursosComponent,
    EditexperienciaComponent,
    EditredesComponent,
    EditproyectosComponent,
    EditskillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() =>getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
