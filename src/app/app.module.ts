import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { TextClockComponent } from './text-clock/text-clock.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { DigitalClockDigitComponent } from './digital-clock-digit/digital-clock-digit.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalogClockComponent,
    TextClockComponent,
    DigitalClockComponent,
    DigitalClockDigitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
