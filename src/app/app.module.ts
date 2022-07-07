import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeehiveComponent } from './beehive/beehive.component';
/* import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; */

@NgModule({
  declarations: [
    AppComponent,
    BeehiveComponent
   /*  FontawesomeDemoComponent  */ 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    /* FontAwesomeModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
