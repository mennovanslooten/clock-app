import { Component, ElementRef, OnInit } from "@angular/core";
import { TimeService } from "../time.service";
import { map, distinctUntilChanged } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
import { RgbColor, HslColor, rgbToHsl } from "../utils/colors";

function getTens(num: number): number {
    return Math.floor(num / 10);
}

function getOnes(num: number): number {
    return num % 10;
}

@Component({
    selector: "app-digital-clock",
    templateUrl: "./digital-clock.component.html",
    styleUrls: ["./digital-clock.component.scss"]
})
export class DigitalClockComponent implements OnInit {
    $color = new BehaviorSubject<RgbColor>({
        r: 0,
        g: 127,
        b: 255
    });
    dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    $hoursTensDigit = this.timeService.$hours.pipe(
        map(getTens),
        distinctUntilChanged()
    );
    $hoursOnesDigit = this.timeService.$hours.pipe(
        map(getOnes),
        distinctUntilChanged()
    );
    $minutesTensDigit = this.timeService.$minutes.pipe(
        map(getTens),
        distinctUntilChanged()
    );
    $minutesOnesDigit = this.timeService.$minutes.pipe(
        map(getOnes),
        distinctUntilChanged()
    );
    $secondsTensDigit = this.timeService.$seconds.pipe(
        map(getTens),
        distinctUntilChanged()
    );
    $secondsOnesDigit = this.timeService.$seconds.pipe(
        map(getOnes),
        distinctUntilChanged()
    );

    constructor(
        private hostElement: ElementRef,
        public timeService: TimeService
    ) {}

    ngOnInit() {
        this.$color.subscribe((rgbColor: RgbColor) => {
            this.setColor(rgbColor);
        });
    }

    colorInput($event: Event) {
        const color = ($event.target as HTMLInputElement).value;
        const r = parseInt(color.substr(1, 2), 16);
        const g = parseInt(color.substr(3, 2), 16);
        const b = parseInt(color.substr(5, 2), 16);
        this.setColor({ r, g, b });
    }

    setColor(rgbColor: RgbColor) {
        const { h, s, l }: HslColor = rgbToHsl(rgbColor);
        this.hostElement.nativeElement.style.setProperty("--color-h", h);
        this.hostElement.nativeElement.style.setProperty("--color-s", s);
        this.hostElement.nativeElement.style.setProperty("--color-l", l);
    }
}
