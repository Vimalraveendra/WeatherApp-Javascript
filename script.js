
const API_KEY =YOUR_API_KEY

const mainEle = document.getElementById('main');
const formEle =document.getElementById('form');
const searchEle = document.getElementById('search')



async function getWeatherByLocation(city){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  const data = await response.json()
  console.log('data',data)
  addWeatherDetails(data)

}

function addWeatherDetails(data){
  const weather  = document.createElement('div')
  weather.classList.add('weather')
  weather.innerHTML=`
  <h2>${data.main.temp}°C</h2>
  <p>${data.name}</p>
  `
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

