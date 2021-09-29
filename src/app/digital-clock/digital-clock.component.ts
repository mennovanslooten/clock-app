import { Component, ElementRef, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import { map, distinctUntilChanged } from 'rxjs/operators';

function getTens(num: number): number {
    return Math.floor(num / 10);
}

function getOnes(num: number): number {
    return num % 10;
}

@Component({
    selector: 'app-digital-clock',
    templateUrl: './digital-clock.component.html',
    styleUrls: ['./digital-clock.component.scss'],
})
export class DigitalClockComponent implements OnInit {
    dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    $hoursTensDigit = this.timeService.$hours.pipe(
        map(getTens),
        distinctUntilChanged()
    );
    $hoursOnesDigit = this.timeService.$hours.pipe(
        map(getOnes),
        distinctUntilChanged()
    );
    $minutesTensDigit = this.timeService.$minutes.pipe(
        map(getTens),
        distinctUntilChanged()
    );
    $minutesOnesDigit = this.timeService.$minutes.pipe(
        map(getOnes),
        distinctUntilChanged()
    );
    $secondsTensDigit = this.timeService.$seconds.pipe(
        map(getTens),
        distinctUntilChanged()
    );
    $secondsOnesDigit = this.timeService.$seconds.pipe(
        map(getOnes),
        distinctUntilChanged()
    );

    constructor(
        private hostElement: ElementRef,
        public timeService: TimeService
    ) {}

    ngOnInit() {}
}
