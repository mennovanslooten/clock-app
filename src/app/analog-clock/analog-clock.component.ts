import { Component } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-analog-clock',
  styleUrls: ['analog-clock.component.scss'],
  templateUrl: 'analog-clock.component.html',
  providers: [TimeService]
})
export class AnalogClockComponent {
  constructor(public timeService: TimeService) {
  }
}
