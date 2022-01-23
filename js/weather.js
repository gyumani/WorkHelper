const API_KEY = "c0e327d5bdff30d64f9a8635913f3974";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weatherSpan = document.querySelector("#weather span:last-child");
      const local = data.name;
      const weather = data.weather[0].main;
      let weatherEmoji;
      city.innerText = local;
      weatherSpan.innerText = weather;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

const loaction = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
