
const API_KEY =YOUR_API_KEY


const mainEle = document.getElementById('main');
const formEle =document.getElementById('form');
const searchEle = document.getElementById('search')



async function getWeatherByLocation(city){
  try{
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  const data = await response.json()
  
  addWeatherDetails(data)
  searchEle.value="";
  }catch(error){
    console.log(error)
  }
}

function addWeatherDetails(data){
  const weather  = document.createElement('div')
  weather.classList.add('weather')
 
  if(data.cod==="404"){
    weather.innerHTML=`
    <h2>Please enter a valid city name.</h2>
    `
  }else{
  weather.innerHTML=`
  <h2> <img src="https://api.openweathermap.org/img/w/${data.weather[0].icon}.png"/>
  ${data.main.temp.toFixed()}°C 
  <img src="https://api.openweathermap.org/img/w/${data.weather[0].icon}.png"/></h2>
  <h3>Weather:${data.weather[0].main}</h3>
  <p>${data.name},${data.sys.country}</p>
  `
  }
  //  clean up the element
  mainEle.innerHTML=""
  //  append item to element
  mainEle.appendChild(weather)
}

function searchWeather(e){
   e.preventDefault();
   const city = searchEle.value; 
   if(city){
     getWeatherByLocation(city)
   }
   
}

formEle.addEventListener('submit',searchWeather)

