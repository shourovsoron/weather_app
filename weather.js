// const ApiKey = e18883f6b5b1e83af4faa048a22b9369;
let tempdisplay =document.querySelector(".temp-display");
let searchbtn =document.querySelector(".search-btn");
let searchinput =document.querySelector(".search-input");
let citynamedisplay =document.querySelector(".city_name");
let Weatherimage =document.querySelector(".weather-img");
let sunRizedisplay =document.querySelector(".sunriseTime");
let sunSetDisplay =document.querySelector(".sunsetTime");
let HumidityDisplay =document.querySelector(".Humidity");
let WindDisplay =document.querySelector(".Wind");
let PrecipitationDisplay =document.querySelector(".Precipitation");



const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=bheramara&appid=e18883f6b5b1e83af4faa048a22b9369' ;

async function CheckWeather(city){
    var weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e18883f6b5b1e83af4faa048a22b9369&units=metric`)
    .then((res)=>{
        var data = res.json();
        return data;
    });

    if(weatherdata.weather[0].main == "Haze"){
        Weatherimage.src="./images/haze.png"
    }else if(weatherdata.weather[0].main == "Clouds"){
        Weatherimage.src="./images/clouds.png"

    }else if(weatherdata.weather[0].main == "Clear"){
        Weatherimage.src="./images/clear.png"

    }else if(weatherdata.weather[0].main == "Drizzle"){
        Weatherimage.src="./images/drizzle.png"
    }else if(weatherdata.weather[0].main == "Mist"){
        Weatherimage.src="./images/mist.png"
    }else if(weatherdata.weather[0].main == "Rain"){
        Weatherimage.src="./images/rain.png"
    }else if(weatherdata.weather[0].main == "Snow"){
        Weatherimage.src="./images/snow.png"
    }

    tempdisplay.innerHTML=weatherdata.main.temp +" ºC";
    citynamedisplay.innerHTML=weatherdata.name;
    HumidityDisplay.innerHTML =weatherdata.main.humidity;
    WindDisplay.innerHTML =weatherdata.wind.speed;
    PrecipitationDisplay.innerHTML =weatherdata.clouds.all +" %";


// const d = new Date(1711324974 * 1000);
// let hour = d.getHours();
// let minutes = d.getMinutes();
// sunRizedisplay.innerHTML = weatherdata.sys.sunrise ;

function sunrise(sunriseTime){
    const d = new Date(sunriseTime * 1000);
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let ampm = hour >= 12 ? 'PM' : 'AM';
    // const localtime = d.toLocaleTimeString();
    sunRizedisplay.innerHTML = hour + " : "+ minutes +" "+ampm;

};

function sunset(sunriseTime){
    const d = new Date(sunriseTime * 1000);
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let newhour = hour >= 12 ? hour-12 : hour;
    let ampm = hour >= 12 ? 'PM' : 'AM';
    // const localtime = d.toLocaleTimeString();
    sunSetDisplay.innerHTML = newhour + " : "+ minutes +" "+ampm;

};

sunrise(weatherdata.sys.sunrise);
sunset(weatherdata.sys.sunset);





   console.log(weatherdata)
//    display.innerHTML=weather.main.temp;

}

CheckWeather("Dhaka");

function searchWeather(){
    let getcity = searchinput.value;
    
    if(getcity==""){
        alert("Please Enter City Name")

    }else{
        CheckWeather(getcity);
    }
   

}

searchbtn.addEventListener("click", searchWeather );



