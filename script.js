alert('connected');

const apiKey = "293e6686671ebfd93682c757fd2a70bd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){                                   // this fetches data from the api and converts into the json format
    const response =  await fetch(apiUrl +city + `&appid=${apiKey}`);   
    var data = await response.json();
   if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector("Weather").style.display = "none";
   }

    try {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".Wind").innerHTML = Math.round(data.wind.speed) + "km/h";

         if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./images/clouds.png" ;
         }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./images/clear.png" ;
         }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./images/drizzle.png" ;
         } else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./images/mist.png" ;
         }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./images/rain.png" ;
         } else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "./images/snow.png" ;
         } 

         document.querySelector(".Weather").style.display = "block"
         
    } catch (error) {
        console.log(error);
    }
}

searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value);    
});
