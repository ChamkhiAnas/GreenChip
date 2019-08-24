import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { FormationSectionComponent } from './formation-section/formation-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    SecondSectionComponent,
    FormationSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
