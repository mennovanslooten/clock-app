import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { DigitalClockDigitComponent } from './digital-clock-digit/digital-clock-digit.component';
import { TextClockComponent } from './text-clock/text-clock.component';

const appRoutes: Routes = [
    { path: 'analog', component: AnalogClockComponent },
    { path: 'digital', component: DigitalClockComponent },
    { path: 'text', component: TextClockComponent },
    { path: '', redirectTo: '/digital', pathMatch: 'full' },
    { path: '**', redirectTo: '/digital', pathMatch: 'full' },
];

@NgModule({
    declarations: [
        AppComponent,
        TextClockComponent,
        AnalogClockComponent,
        DigitalClockComponent,
        DigitalClockDigitComponent,
    ],
    imports: [
        RouterModule.forRoot(appRoutes, {
            enableTracing: false,
            useHash: true,
        }),
        BrowserModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
