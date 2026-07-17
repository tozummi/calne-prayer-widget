const latitude = 51.448009;
const longitude = -2.027951;


const coordinates = new adhan.Coordinates(
latitude,
longitude
);


const params = adhan.CalculationMethod.MuslimWorldLeague();


function updatePrayerTimes(){

const now = new Date();

const prayerTimes = new adhan.PrayerTimes(
coordinates,
now,
params
);


function format(time){
return time.toLocaleTimeString([],{
hour:"2-digit",
minute:"2-digit",
hour12:false
});
}


document.getElementById("fajr").innerText=format(prayerTimes.fajr);
document.getElementById("dhuhr").innerText=format(prayerTimes.dhuhr);
document.getElementById("asr").innerText=format(prayerTimes.asr);
document.getElementById("maghrib").innerText=format(prayerTimes.maghrib);
document.getElementById("isha").innerText=format(prayerTimes.isha);



const prayers=[
["Fajr",prayerTimes.fajr],
["Dhuhr",prayerTimes.dhuhr],
["Asr",prayerTimes.asr],
["Maghrib",prayerTimes.maghrib],
["Isha",prayerTimes.isha]
];


let next=null;


for(let prayer of prayers){
if(prayer[1]>now){
next=prayer;
break;
}
}


if(!next){

next=[
"Fajr",
new Date(prayerTimes.fajr.getTime()+86400000)
];

}


const difference=next[1]-now;


const hours=Math.floor(difference/3600000);

const minutes=Math.floor(
(difference%3600000)/60000
);


document.getElementById("nextPrayer").innerText =
`${next[0]} in ${hours}h ${minutes}m`;

}


updatePrayerTimes();

setInterval(updatePrayerTimes,60000);
