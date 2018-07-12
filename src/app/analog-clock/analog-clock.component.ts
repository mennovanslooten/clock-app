import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
    selector: 'app-analog-clock',
    templateUrl: './analog-clock.component.html',
    styleUrls: ['./analog-clock.component.scss'],
})
export class AnalogClockComponent implements OnInit {
    constructor(public timeService: TimeService) {}

    ngOnInit() {}
}
