let chart;

let map;

let marker;



// ===============================
// SEARCH KOTA
// ===============================


async function searchCity() {


    let city =
        document.getElementById(
            "cityInput"
        ).value;



    let url =

        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=id&format=json`;



    let response =
        await fetch(url);



    let data =
        await response.json();



    if (!data.results) {

        alert("Kota tidak ditemukan");

        return;

    }



    let lokasi =
        data.results[0];



    getWeather(

        lokasi.latitude,

        lokasi.longitude,

        lokasi.name

    );


}





// ===============================
// CUACA
// ===============================


async function getWeather(lat, lon, city) {


    let url =


        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,pressure_msl,wind_speed_10m,weather_code&daily=temperature_2m_max,weather_code&timezone=auto`;



    let response =
        await fetch(url);



    let data =
        await response.json();





    document.getElementById(
        "cityName"
    ).innerHTML =
        "🌍 " + city;



    document.getElementById(
        "temperature"
    ).innerHTML =

        data.current.temperature_2m + " °C";



    document.getElementById(
        "humidity"
    ).innerHTML =

        data.current.relative_humidity_2m + " %";



    document.getElementById(
        "wind"
    ).innerHTML =

        data.current.wind_speed_10m + " km/h";



    document.getElementById(
        "pressure"
    ).innerHTML =

        data.current.pressure_msl + " hPa";



    document.getElementById(
        "icon"
    ).innerHTML =

        weatherIcon(
            data.current.weather_code
        );





    showForecast(
        data.daily
    );



    showChart(
        data.daily
    );



    showMap(
        lat,
        lon,
        city
    );


}






// ===============================
// ICON CUACA
// ===============================


function weatherIcon(code) {


    if (code == 0)

        return "☀️";


    if (code <= 3)

        return "🌤️";


    if (code <= 67)

        return "🌧️";


    if (code <= 77)

        return "❄️";


    return "⛈️";


}





// ===============================
// FORECAST
// ===============================


function showForecast(data) {


    let html = "";



    for (let i = 0; i < 7; i++) {


        html += `


<div class="col-md-3 mt-3">


<div class="card p-3 text-center">


<h6>
${data.time[i]}
</h6>


<h1>
${weatherIcon(data.weather_code[i])}
</h1>


<h3>
${data.temperature_2m_max[i]}°C
</h3>


</div>


</div>


`;


    }



    document.getElementById(
        "forecast"
    ).innerHTML = html;


}





// ===============================
// CHART
// ===============================


function showChart(data) {


    let ctx =
        document.getElementById(
            "chart"
        );



    if (chart)

        chart.destroy();



    chart = new Chart(ctx, {


        type: "line",


        data: {


            labels: data.time,


            datasets: [{


                label: "Suhu °C",


                data: data.temperature_2m_max,


                borderWidth: 3


            }]


        }



    });


}








// ===============================
// MAP
// ===============================


function showMap(lat, lon, city) {



    if (map) {

        map.remove();

    }



    map =
        L.map('map')
            .setView(
                [lat, lon],
                12
            );



    L.tileLayer(

        'https://tile.openstreetmap.org/{z}/{x}/{y}.png'

    ).addTo(map);



    marker =
        L.marker(
            [lat, lon]
        )
            .addTo(map)
            .bindPopup(city)
            .openPopup();



}