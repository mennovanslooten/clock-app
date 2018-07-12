import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { TimeService } from './time.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [TimeService],
})
export class AppComponent {}
