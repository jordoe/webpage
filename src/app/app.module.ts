import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { HomeComponent } from './Components/home/home.component';
import { InfoComponent } from './Components/info/info.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SoftwareComponent } from './Components/software/software.component';
import { DesignComponent } from './Components/design/design.component';
import { VideogamesComponent } from './Components/videogames/videogames.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    InfoComponent,
    ContactComponent,
    FooterComponent,
    SoftwareComponent,
    DesignComponent,
    VideogamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
