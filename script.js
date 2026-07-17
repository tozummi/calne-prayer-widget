const latitude = 51.448009;
const longitude = -2.027951;

const coordinates = new adhan.Coordinates(
  latitude,
  longitude
);

const params = adhan.CalculationMethod.MuslimWorldLeague();

const date = new Date();

const prayerTimes = new adhan.PrayerTimes(
  coordinates,
  date,
  params
);

function formatTime(time) {
  return time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}

document.getElementById("fajr").innerText =
  formatTime(prayerTimes.fajr);

document.getElementById("dhuhr").innerText =
  formatTime(prayerTimes.dhuhr);

document.getElementById("asr").innerText =
  formatTime(prayerTimes.asr);

document.getElementById("maghrib").innerText =
  formatTime(prayerTimes.maghrib);

document.getElementById("isha").innerText =
  formatTime(prayerTimes.isha);
