import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-digital-clock-digit',
    templateUrl: './digital-clock-digit.component.html',
    styleUrls: ['./digital-clock-digit.component.scss'],
})
export class DigitalClockDigitComponent {
    @Input()
    digit: number;
}
