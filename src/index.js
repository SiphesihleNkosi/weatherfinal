function refreshWeather(response) {
    console.log(response.data)
    let currentTemp = document.querySelector("#degree");
    let ttemperature = response.data.temperature.current;
    let descriptionElement = document.querySelector("#description");
    let description = response.data.condition.description;
    let windElement = document.querySelector("#wind");
    let humidityElement = document.querySelector("#humidity");
    let date = new Date(response.data.time * 1000);
    let timeElement = document.querySelector("#time");

    timeElement.innerHTML = `${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

    currentTemp.innerHTML = Math.round(ttemperature);
    descriptionElement.innerHTML = description;
    windElement.innerHTML = response.data.wind.speed;
    humidityElement.innerHTML = response.data.temperature.humidity;
}

function searchCity(city) {
   let apiKey="b80b1a226o7d41ab126f0bff939f33t8";
   let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
   

   axios.get(apiUrl).then(refreshWeather)
}



function cityweathername(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#searchInput");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInputElement.value;
    searchCity(searchInput.value)
}


let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", cityweathername);