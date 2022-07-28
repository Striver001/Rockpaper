import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { PlayervscompComponent } from './playervscomp/playervscomp.component';
import { ComputervscompComponent } from './computervscomp/computervscomp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    PlayervscompComponent,
    ComputervscompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
