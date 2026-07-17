const latitude = 51.448009;
const longitude = -2.027951;

const coordinates = new adhan.Coordinates(
  latitude,
  longitude
);

const date = new Date();

const params = adhan.CalculationMethod.MuslimWorldLeague();

params.madhab = adhan.Madhab.Shafi;

const prayerTimes = new adhan.PrayerTimes(
  coordinates,
  date,
  params
);


function formatTime(time) {
  return time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}


document.getElementById("fajr").textContent =
  formatTime(prayerTimes.fajr);

document.getElementById("sunrise").textContent =
  formatTime(prayerTimes.sunrise);

document.getElementById("dhuhr").textContent =
  formatTime(prayerTimes.dhuhr);

document.getElementById("asr").textContent =
  formatTime(prayerTimes.asr);

document.getElementById("maghrib").textContent =
  formatTime(prayerTimes.maghrib);

document.getElementById("isha").textContent =
  formatTime(prayerTimes.isha);
