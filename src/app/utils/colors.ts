// Adapted from https://gist.github.com/vahidk/05184faf3d92a0aa1b46aeaa93b07786
export type RgbColor = {
    r: number; // [0...255]
    g: number; // [0...255]
    b: number; // [0...255]
};

export type HslColor = {
    h: number; // [0...360]
    s: string; // "[0...100]%"
    l: string; // "[0...100]%"
};

export function rgbToHsl({ r, g, b }: RgbColor): HslColor {
    // Normalize to [0-1]
    r = r / 255;
    g = g / 255;
    b = b / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    let h: number;

    if (d === 0) {
        h = 0;
    } else if (max === r) {
        h = ((((g - b) / d) % 6) + 6) % 6;
    } else if (max === g) {
        h = (b - r) / d + 2;
    } else if (max === b) {
        h = (r - g) / d + 4;
    }

    const l = (min + max) / 2;
    const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));

    return {
        h: h * 60,
        s: Math.floor(100 * s) + '%',
        l: Math.floor(100 * l) + '%',
    };
}

/*
export function hslToRgb(h, s, l) {
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let hp = h / 60.0;
    let x = c * (1 - Math.abs((hp % 2) - 1));
    let rgb1;
    if (isNaN(h)) rgb1 = [0, 0, 0];
    else if (hp <= 1) rgb1 = [c, x, 0];
    else if (hp <= 2) rgb1 = [x, c, 0];
    else if (hp <= 3) rgb1 = [0, c, x];
    else if (hp <= 4) rgb1 = [0, x, c];
    else if (hp <= 5) rgb1 = [x, 0, c];
    else if (hp <= 6) rgb1 = [c, 0, x];
    let m = l - c * 0.5;
    return [
        Math.round(255 * (rgb1[0] + m)),
        Math.round(255 * (rgb1[1] + m)),
        Math.round(255 * (rgb1[2] + m))
    ];
}
*/
