import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SoftwareComponent } from './Components/software/software.component';
import { DesignComponent } from './Components/design/design.component';
import { VideogamesComponent } from './Components/videogames/videogames.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'software', component: SoftwareComponent },  
  { path: 'design', component: DesignComponent },  
  { path: 'videogames', component: VideogamesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
