import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopNavigationComponent} from "./components";
import {LandingPageComponent} from "./components";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AvatarModule } from 'primeng/avatar';
import {CardModule} from "primeng/card";
import { DataViewModule } from 'primeng/dataview';
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TagModule} from "primeng/tag";

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
    CardModule,
    DataViewModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    CommonModule,
    TagModule
  ],
  providers: [],
  exports: [
    TopNavigationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
