import { Component } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-text-clock',
  templateUrl: './text-clock.component.html',
  styleUrls: ['./text-clock.component.scss'],
  providers: [TimeService]
})
export class TextClockComponent {

  constructor(public timeService: TimeService) {
  }

}
