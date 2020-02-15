
let t = parseFloat(document.getElementById('temperature').textContent);
let s = parseFloat(document.getElementById('wspeed').textContent);

if (t<50, s>=3) {
    windchill = (35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.425 * t * Math.pow(s, 0.16));

    document.getElementById('windchill').textContent = (windchill).toFixed(0) + ºF;
}

else (t>=50, s<3) {

    document.getElementById('windchill').textContent = (N/A);
}
