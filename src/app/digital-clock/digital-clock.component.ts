import { Component, OnInit } from "@angular/core";
import { TimeService } from "../time.service";

function getTens(num: number): number {
  return Math.floor(num / 10);
}

function getOnes(num: number): number {
  return num % 10;
}

@Component({
  selector: "app-digital-clock",
  templateUrl: "./digital-clock.component.html",
  styleUrls: ["./digital-clock.component.scss"],
  providers: [TimeService]
})
export class DigitalClockComponent {
  hoursTensDigit$ = this.timeService.hours$.map(getTens).distinctUntilChanged();
  hoursOnesDigit$ = this.timeService.hours$.map(getOnes).distinctUntilChanged();
  minutesTensDigit$ = this.timeService.minutes$
    .map(getTens)
    .distinctUntilChanged();
  minutesOnesDigit$ = this.timeService.minutes$
    .map(getOnes)
    .distinctUntilChanged();
  secondsTensDigit$ = this.timeService.seconds$
    .map(getTens)
    .distinctUntilChanged();
  secondsOnesDigit$ = this.timeService.seconds$
    .map(getOnes)
    .distinctUntilChanged();

  constructor(public timeService: TimeService) {}
}
