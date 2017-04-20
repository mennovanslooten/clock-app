import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss'],
  providers: [TimeService]
})

export class DigitalClockComponent {
  seconds: number;
  minutes: number;
  hours: number;

  constructor(private timeService: TimeService) {

    timeService.hoursStream.subscribe((hours: number) => {
      this.hours = hours;
    });

    timeService.minutesStream.subscribe((minutes: number) => {
      this.minutes = minutes;
    });

    timeService.secondsStream.subscribe((seconds: number) => {
      this.seconds = seconds;
    });

  }

}
