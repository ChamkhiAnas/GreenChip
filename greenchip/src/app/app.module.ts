import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';

import { SpecialiteSectionComponent } from './specialite-section/specialite-section.component';
import { InscrisSectionComponent } from './inscris-section/inscris-section.component';
import { CampusSectionComponent } from './campus-section/campus-section.component';
import { DoudaSectionComponent } from './douda-section/douda-section.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CandidaturePageComponent } from './pages/candidature-page/candidature-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OujdaComponent } from './pages/oujda/oujda.component';
import { AutresComponent } from './pages/autres/autres.component';
import { BerkaneComponent } from './pages/berkane/berkane.component';
import { JeradaComponent } from './pages/jerada/jerada.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    SecondSectionComponent,
    SpecialiteSectionComponent,
    InscrisSectionComponent,
    CampusSectionComponent,
    DoudaSectionComponent,
    CandidaturePageComponent,
    HomePageComponent,
    OujdaComponent,
    AutresComponent,
    BerkaneComponent,
    JeradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
