import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';
import { startWith } from 'rxjs/operators/startWith';
import { withLatestFrom } from 'rxjs/operators/withLatestFrom';
import { filter } from 'rxjs/operators/filter';
import { share } from 'rxjs/operators/share';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';

const now = new Date();
const start = new Date(2018, 6, 14, 23, 59, 45);
// const offset = now.valueOf() - start.valueOf();
const offset = 0;

@Injectable()
export class TimeService {
    fps = 30;

    tickDelay = 1000 / this.fps;

    $visibility: Observable<boolean> = fromEvent(
        document,
        'visibilitychange'
    ).pipe(
        map(() => document.visibilityState === 'visible'),
        startWith(true)
    );

    // Only emit $time while document is visible
    $time: Observable<Date> = interval(this.tickDelay) // emits tick
        .pipe(
            withLatestFrom(this.$visibility), // emits [tick, isVisble]
            filter(([, b]) => b), // emits [tick, isVisbible] when isVisible === true
            // map(() => now), // emits Date when isVisible === true
            // tap(([i, b]) => console.log(i)), // emits Date when isVisible === true
            map(() => new Date(new Date().valueOf() - offset)), // emits Date when isVisible === true
            share()
        );

    $centiseconds: Observable<number> = this.$time.pipe(
        map(
            (date: Date): number => {
                return Math.floor(date.getMilliseconds() / 10);
            }
        )
    );

    $seconds: Observable<number> = this.$time.pipe(
        map((date: Date): number => date.getSeconds()),
        distinctUntilChanged()
    );

    $minutes: Observable<number> = this.$time.pipe(
        map((date: Date): number => date.getMinutes()),
        distinctUntilChanged()
    );

    $hours: Observable<number> = this.$time.pipe(
        map((date: Date): number => date.getHours()),
        distinctUntilChanged()
    );

    $days: Observable<number> = this.$time.pipe(
        map((date: Date): number => date.getDate()),
        distinctUntilChanged()
    );

    $months: Observable<number> = this.$time.pipe(
        map((date: Date): number => date.getMonth() + 1),
        distinctUntilChanged()
    );

    $years: Observable<number> = this.$time.pipe(
        map((date: Date): number => date.getFullYear()),
        distinctUntilChanged()
    );

    $weekdays: Observable<string> = this.$time.pipe(
        map(
            (date: Date): string => {
                const dayNamesShort = [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat',
                ];
                const dayNamesLong = [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                ];
                const dayIndex = date.getDay();
                return dayNamesShort[dayIndex];
            }
        ),
        distinctUntilChanged()
    );

    constructor() {
        // this.$visibility.subscribe(isVisible =>
        //     console.log(`Visibility: ${isVisible} on `, new Date().toString())
        // );
    }
}
