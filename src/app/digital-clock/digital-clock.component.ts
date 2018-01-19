import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss'],
  providers: [TimeService]
})

export class DigitalClockComponent {
  constructor(public timeService: TimeService) {
  }
}
