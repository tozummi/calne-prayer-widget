const latitude = 51.448009;
const longitude = -2.027951;

async function testPrayerTimes() {

  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const url = `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${latitude}&longitude=${longitude}&method=3`;

  try {
    const response = await fetch(url);

    const data = await response.json();

    alert(JSON.stringify(data.data.timings));

  } catch (error) {
    alert("ERROR: " + error);
  }
}

testPrayerTimes();
