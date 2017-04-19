import { Component } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-analog-clock',
  styleUrls: ['analog-clock.component.scss'],
  templateUrl: 'analog-clock.component.html',
  providers: [TimeService]
})
export class AnalogClockComponent {

  hours: number;
  minutes: number;
  seconds: number;

  constructor(private timeService: TimeService) {

    timeService.secondsStream.subscribe((seconds: number) => {
      this.seconds = seconds;
    });

    timeService.minutesStream.subscribe((minutes: number) => {
      this.minutes = minutes;
    });

    timeService.hoursStream.subscribe((hours: number) => {
      this.hours = hours;
    });

  }
}
