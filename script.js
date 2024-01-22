
    let inputBox = document.getElementsByClassName('input-box')[0];
    let searchBtn = document.getElementById('searchBtn'); // Changed to getElementById
    let weather_img = document.querySelector('.Weather-img'); // Changed to querySelector
    let temperature = document.querySelector('.temperature'); // Corrected variable name
    let description = document.querySelector('.description'); // Corrected variable name
    let humidity = document.querySelector('#humidity'); // Changed to querySelector
    let wind_speed = document.querySelector('#wind-speed'); // Changed to querySelector
    let location_not_found = document.querySelector('.location-not-found');

async function checkWeather(city) {
  const api_key = "ac45ef9cf3b314751faa68bbd49b8749";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data = await fetch(url).then(response => response.json());

  if(weather_data.cod ===`404`){
    location_not_found.style.display = "flex";
    weather_img.style.display = "none";

    temperature.innerHTML= ""
    description.innerHTML=  ""
    humidity.innerHTML = "";
    wind_speed.innerHTML = "";
  
    console.log("404 error");
    return;
  } else {
    weather_img.style.display = "flex";
    location_not_found.style.display = "none";
  }


  temperature.innerHTML= `${Math.round(weather_data.main.temp-273.15)}°C`;
  description.innerHTML=  `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch(weather_data.weather[0].main.toLowerCase()){
    case `cloud`:
      console.log("weather_data.weather Cloud ")
      weather_img.src = "/assest/cloud.png";
      break;
    case `clear`:
      console.log("weather_data.weather Clear ")
      weather_img.src = "/assest/clear.png";
      break;
    case `rain`:
      console.log("weather_data.weather Rain ")
      weather_img.src = "/assest/rain.png";
      break;
    case `mist`:
      console.log("weather_data.weather Mist ")
      weather_img.src = "/assest/mist.png";
      break;
    case `snow`:
      console.log("weather_data.weather snow ")
      weather_img.src = "/assest/snow.png";
      break;
    default: 
      console.log("weather_data.weather default ")
      weather_img.src = "/assest/rain.png";
      break;
  }
  console.log(weather_data);
  // Add logic to update the DOM with weather data
}

searchBtn.addEventListener('click', function () {
  if(inputBox.value) {
    checkWeather(inputBox.value);
  }
});


