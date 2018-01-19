import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';

let timeServiceInstance = null;

@Injectable()
export class TimeService {

  tickDelay = 1000 / 30; // Milliseconds
  visibilityStream = Observable.fromEvent(document, 'visibilitychange')
    .map(() => document.visibilityState === 'visible')
    .startWith(true);

  // Only emit timeStream while document is visible
  timeStream = Observable.interval(this.tickDelay) // emits tick
    .withLatestFrom(this.visibilityStream) // emits [tick, isVisble]
    .filter(([, b]) => b) // emits [tick, isVisbible] when isVisible === true
    .map(() => new Date) // emits Date when isVisible === true
    .share();

  centisecondsStream = this.timeStream
    .map((date: Date): number => {
      return Math.floor(date.getMilliseconds() / 10);
    });

  secondsStream = this.timeStream
    .map((date: Date): number => date.getSeconds())
    .distinctUntilChanged();

  minutesStream = this.timeStream
    .map((date: Date): number => date.getMinutes())
    .distinctUntilChanged();

  hoursStream = this.timeStream
    .map((date: Date): number => date.getHours())
    .distinctUntilChanged();

  datesStream = this.timeStream
    .map((date: Date): number => date.getDate())
    .distinctUntilChanged();

  daysStream = this.timeStream.map((date: Date): string => {
    var dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var dayNamesLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayIndex = date.getDay();
    return dayNamesShort[dayIndex];
    // return {
    //   dayNameShort: dayNamesShort[dayIndex],
    //   dayNameLong: dayNamesLong[dayIndex],
    // };
  }).distinctUntilChanged();

  startDate = new Date();

  constructor() {
    if (timeServiceInstance) {
      return timeServiceInstance;
    }

    timeServiceInstance = this;
  }

}
