import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { AboutComponent } from './components/about.component';
import { ContactComponent } from './components/contact.component';
import { ErrorComponent } from './components/error.component';
import { CreateProyectComponent } from './components/create-proyect.component';
import { ListProyectComponent } from './components/list-proyect.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    CreateProyectComponent,
    ListProyectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
