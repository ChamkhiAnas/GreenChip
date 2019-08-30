import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidaturePageComponent } from './pages/candidature-page/candidature-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CandidaterPageComponent } from './pages/candidater-page/candidater-page.component';


const routes: Routes = [
  { path: 'Candidatures', component: CandidaturePageComponent },
  { path: 'Candidater', component: CandidaterPageComponent },
  { path: 'Acceuil', component: HomePageComponent },

  { path: '', component: HomePageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [CandidaturePageComponent, HomePageComponent]