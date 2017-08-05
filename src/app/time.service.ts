import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

let timeServiceInstance = null;



@Injectable()
export class TimeService {

  timeStream = new Subject<any>();
  timeout: number;
  tickDelay = 30; // Milliseconds

  centisecondsStream = this.timeStream.map((date: Date): number => {
    return Math.floor(date.getMilliseconds() / 10);
  });

  secondsStream = this.timeStream.map((date: Date): number => {
    return date.getSeconds();
  }).distinctUntilChanged();

  minutesStream = this.timeStream.map((date: Date): number => {
    return date.getMinutes();
  }).distinctUntilChanged();

  hoursStream = this.timeStream.map((date: Date): number => {
    return date.getHours();
  }).distinctUntilChanged();

  startDate = new Date();

  constructor() {
    if (timeServiceInstance) {
      return timeServiceInstance;
    }

    document.addEventListener('visibilitychange', this.toggleTimer.bind(this), false);

    this.toggleTimer();

    timeServiceInstance = this;
  }

  private toggleTimer(): void {
    if (document.hidden) {
      clearTimeout(this.timeout);
    } else {
      this.updateTime();
    }
  }

  private updateTime(): void {
    this.timeStream.next(new Date());
    this.timeout = setTimeout(this.updateTime.bind(this), this.tickDelay);
    // requestAnimationFrame(this.updateRealTime.bind(this));
  }

}
