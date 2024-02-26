import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { ProfessionalSkillComponent } from './view/professional-skill/professional-skill.component';
import { ContactComponent } from './view/contact/contact.component';
import { NavbarViewComponent } from './view/component/navbar-view/navbar-view.component';
import { AboutComponent } from './view/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProfessionalSkillComponent,
    ContactComponent,
    AboutComponent,
    NavbarViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
