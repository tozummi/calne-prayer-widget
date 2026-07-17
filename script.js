const latitude = 51.448009;
const longitude = -2.027951;

async function getPrayerTimes() {

  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const url =
  `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${latitude}&longitude=${longitude}&method=3`;

  const response = await fetch(url);
  const data = await response.json();

  const times = data.data.timings;


  document.getElementById("fajr").innerText = times.Fajr;
  document.getElementById("dhuhr").innerText = times.Dhuhr;
  document.getElementById("asr").innerText = times.Asr;
  document.getElementById("maghrib").innerText = times.Maghrib;
  document.getElementById("isha").innerText = times.Isha;

}

getPrayerTimes();
