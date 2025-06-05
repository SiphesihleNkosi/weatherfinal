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
    let icon = document.querySelector("#icon");


    icon.innerHTML =`<img src="${response.data.condition. icon_url }"></img>`;
    timeElement.innerHTML = formateDate(date);

    currentTemp.innerHTML = Math.round(ttemperature);
    descriptionElement.innerHTML = description;
    windElement.innerHTML = response.data.wind.speed;
    humidityElement.innerHTML = response.data.temperature.humidity;
    getForecast(response.data.city);
}
function formateDate(date) {

    let minutes = date.getMinutes();
    let hours = date.getHours();
    
    let days =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    let day = days[date.getDay()];
    return`${day} ${hours}:${minutes}`; 


    
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



function displayForecast(response) {

let days = ["Tue","Wed", "Thur", "Fri", "Sat"];
let forecastHtml = "";


days.forEach(function (day) {

    forecastHtml += ` <div class="weather-forecast-day">
                    <div class="weather-forecast-day"> <strong>${day}</strong></div>
                    <div><img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-512.png"
                            class="weather-forecast-icon"></img> </div>
                    <div class="weather-forecast-degrees"><strong>15&deg; 9&deg;</strong></div>
                </div>
                `;
}); 
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;
}
function getForecast(city) {
    let apiKey = "b80b1a226o7d41ab126f0bff939f33t8";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayForecast);

    console.log(apiUrl)
}

