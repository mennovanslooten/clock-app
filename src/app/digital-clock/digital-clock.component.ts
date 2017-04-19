import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss'],
  providers: [TimeService]
})

export class DigitalClockComponent {
  digits: number[];

  constructor(private timeService: TimeService) {
    this.digits = new Array(8).fill(8);

    timeService.hoursStream.subscribe((hours: number) => {
      this.digits[0] = this.getTens(hours);
      this.digits[1] = this.getOnes(hours);
    });

    timeService.minutesStream.subscribe((minutes: number) => {
      this.digits[2] = this.getTens(minutes);
      this.digits[3] = this.getOnes(minutes);
    });

    timeService.secondsStream.subscribe((seconds: number) => {
      this.digits[4] = this.getTens(seconds);
      this.digits[5] = this.getOnes(seconds);
    });

    // timeService.centisecondsStream.subscribe((seconds: number) => {
    //   this.digits[6] = this.getTens(seconds);
    //   this.digits[7] = this.getOnes(seconds);
    // });

  }


  getTens(num: number): number {
    return Math.floor(num / 10);
  }


  getOnes(num: number): number {
    return num % 10;
  }

}
