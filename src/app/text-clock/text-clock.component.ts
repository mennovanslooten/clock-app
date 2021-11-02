import { Component } from '@angular/core';
import { TimeService } from '../time.service';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import humanizeTime from '../utils/humanizeTime';

@Component({
    selector: 'app-text-clock',
    templateUrl: './text-clock.component.html',
    styleUrls: ['./text-clock.component.scss'],
    providers: [TimeService],
})
export class TextClockComponent {
    $timeString: Observable<string> = combineLatest(
        this.timeService.$hours,
        this.timeService.$minutes
    ).pipe(map(([hours, minutes]) => humanizeTime(hours, minutes)));

    $timeStringParts: Observable<Array<string>> = this.$timeString.pipe(
        tap((timeString: string) => console.log(timeString)),
        map((timeString: string): Array<string> => timeString.split('|')),
        tap((timeStringParts: Array<string>) => console.log(timeStringParts))
    );

    constructor(public timeService: TimeService) {}
}
