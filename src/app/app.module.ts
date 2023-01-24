import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
