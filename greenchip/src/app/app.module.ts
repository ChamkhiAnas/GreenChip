import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { FormationSectionComponent } from './formation-section/formation-section.component';
import { InscrisSectionComponent } from './inscris-section/inscris-section.component';
import { CampusSectionComponent } from './campus-section/campus-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    SecondSectionComponent,
    FormationSectionComponent,
    InscrisSectionComponent,
    CampusSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
