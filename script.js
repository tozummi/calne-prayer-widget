const latitude = 51.448009;
const longitude = -2.027951;

async function getPrayerTimes() {

  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const url = 
  `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${latitude}&longitude=${longitude}&method=3`;

  try {

    const response = await fetch(url);
    const data = await response.json();

    const timings = data.data.timings;


    document.getElementById("fajr").innerText = timings.Fajr;
    document.getElementById("dhuhr").innerText = timings.Dhuhr;
    document.getElementById("asr").innerText = timings.Asr;
    document.getElementById("maghrib").innerText = timings.Maghrib;
    document.getElementById("isha").innerText = timings.Isha;


    updateCountdown(timings);


  } catch(error) {

    console.log(error);
    document.getElementById("nextPrayer").innerText = "Unable to load";

  }

}



function updateCountdown(timings) {

  const now = new Date();


  const prayers = [
    ["Fajr", timings.Fajr],
    ["Dhuhr", timings.Dhuhr],
    ["Asr", timings.Asr],
    ["Maghrib", timings.Maghrib],
    ["Isha", timings.Isha]
  ];


  let nextPrayer = null;


  for (let prayer of prayers) {

    let [hour, minute] = prayer[1].split(":");

    let prayerTime = new Date();

    prayerTime.setHours(hour);
    prayerTime.setMinutes(minute);
    prayerTime.setSeconds(0);


    if (prayerTime > now) {
      nextPrayer = [prayer[0], prayerTime];
      break;
    }

  }


  if (!nextPrayer) {
    nextPrayer = ["Fajr", new Date(now.getTime()+86400000)];
  }


  const difference = nextPrayer[1] - now;


  const hours = Math.floor(difference / 3600000);

  const minutes = Math.floor(
    (difference % 3600000) / 60000
  );


  document.getElementById("nextPrayer").innerText =
  `${nextPrayer[0]} in ${hours}h ${minutes}m`;

}


getPrayerTimes();

setInterval(getPrayerTimes, 60000);
