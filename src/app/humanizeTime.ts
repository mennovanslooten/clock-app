export default function humanizeTime(hours: number, minutes: number): string {
    const minutesText = getHumanizedMinutes(hours, minutes);
    const hoursText = getHumanizedHours(hours, minutes);

    if (minutesText) {
        return `${minutesText} ${hoursText}`;
    }

    return hoursText;
}

function getHumanizedMinutes(hours: number, minutes: number) {
    if (minutes === 0) {
        return '';
    }

    if (minutes === 15) {
        return 'a quarter past';
    }

    if (minutes === 30) {
        return 'half past';
    }

    if (minutes === 45) {
        return 'a quarter to';
    }

    if (minutes > 45) {
        return `${getNumberText(60 - minutes)} to`;
    }

    return `${getNumberText(minutes)} past`;
}

function getHumanizedHours(hours: number, minutes: number) {
    if (minutes >= 45) {
        hours = getNextHour(hours);
    }

    if (hours === 0) {
        return 'midnight';
    }

    if (hours === 12) {
        return 'noon';
    }

    hours = hours % 12;

    const hoursText = getNumberText(hours);

    if (minutes === 0) {
        return `${hoursText} o'clock`;
    }

    return hoursText;
}

function getNumberText(num: number): string {
    const ones = 'zero one two three four five six seven eight nine'.split(' ');
    const teens = 'eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(
        ' '
    );
    const tens = 'ten twenty thirty fourty fifty sixty seventy eighty ninety'.split(
        ' '
    );

    if (num < 10) {
        return ones[num];
    }

    if (num % 10 === 0) {
        return tens[num / 10 - 1];
    }

    if (num < 20) {
        return teens[num - 11];
    }

    return `${tens[Math.floor(num / 10) - 1]} ${ones[num % 10]}`;
}

function getHoursText(hours: number) {
    switch (hours) {
        case 0:
            return 'midnight';
        case 12:
            return 'noon';
        default:
            return getNumberText(hours);
    }
}

function getNextHour(hours: number) {
    let nextHour = hours + 1;
    if (nextHour > 12) {
        nextHour = nextHour % 12;
    }
    return nextHour;
}
