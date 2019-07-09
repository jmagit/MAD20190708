import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main';
import { CommonAppModule } from './common-app';
import { IndraCoreModule, LoggerService, ERROR_LEVEL } from 'src/indra-core';
import { environment } from 'src/environments/environment';
import { DemosComponent } from './demos/demos.component';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    MainModule, CommonAppModule, IndraCoreModule,
    AppRoutingModule
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
