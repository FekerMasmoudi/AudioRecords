import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioRecorderPolyfillComponent } from './audio-recorder-polyfill/audio-recorder-polyfill.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioRecorderPolyfillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
