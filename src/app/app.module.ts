import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { WindowComponent } from './window/window.component';

import { PrimeModule } from './prime.module';
@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    WindowComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    PrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
