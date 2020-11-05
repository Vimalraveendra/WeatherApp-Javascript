const API_KEY= process.env
console.log("api",API_KEY);
async function getWeatherByLocation(city){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  const weather = await response.json()
  console.log("weather",weather)
//   getWeatherByDay(woeid)
}

// async function getWeatherByDay(id){
//     const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}`)
//     const data = await response.json();
//     console.log("data",data)
// }

getWeatherByLocation('london')