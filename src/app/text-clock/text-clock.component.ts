import { Component } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-text-clock',
  templateUrl: './text-clock.component.html',
  styleUrls: ['./text-clock.component.scss'],
  providers: [TimeService]
})
export class TextClockComponent {

  hours: string;
  minutes: string;
  seconds: string;
  centiseconds: string;

  constructor(private timeService: TimeService) {

    timeService.centisecondsStream.subscribe((centiseconds: number) => {
      this.centiseconds = this.pad(centiseconds);
    });

    timeService.secondsStream.subscribe((seconds: number) => {
      this.seconds = this.pad(seconds);
    });

    timeService.minutesStream.subscribe((minutes: number) => {
      this.minutes = this.pad(minutes);
    });

    timeService.hoursStream.subscribe((hours: number) => {
      this.hours = this.pad(hours);
    });

  }


  private pad(num: number):string {
    const str = num.toString();
    if (num >= 10) {
      return str;
    }
    return '0' + str;
  }

}
