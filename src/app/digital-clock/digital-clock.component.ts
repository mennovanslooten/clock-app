import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import { map } from 'rxjs/operators/map';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';

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

    constructor(public timeService: TimeService) {}

    ngOnInit() {}
}
