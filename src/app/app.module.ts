import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {TopNavigationComponent} from "./components";
import {LandingPageComponent} from "./components";
import { AvatarModule } from 'primeng/avatar';
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    AvatarModule,
    CardModule
  ],
  providers: [],
  exports: [
    TopNavigationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
