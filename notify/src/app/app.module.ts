import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotifyComponent } from './notify/notify.component';
import { NotifyService }	from './services/notify.service';
import { StyleComponent } from './style/style.component';

import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NotifyComponent,
    StyleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
