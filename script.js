async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  const weather = data.weather?.[0] || {};
  const main = data.main || {};
  const wind = data.wind || {};

  document.getElementById("weather-icon").src =
    weather.icon !== undefined ? weather.icon : "N/A";

  document.getElementById("weather-main").textContent =
    weather.main !== undefined ? weather.main : "N/A";

  document.getElementById("location").textContent =
    data.name !== undefined ? data.name : "N/A";

  document.getElementById("main-temperature").textContent =
    main.temp !== undefined ? main.temp : "N/A";

  document.getElementById("feels-like").textContent =
    main.feels_like !== undefined ? main.feels_like : "N/A";

  document.getElementById("humidity").textContent =
    main.humidity !== undefined ? main.humidity : "N/A";

  document.getElementById("wind").textContent =
    wind.speed !== undefined ? wind.speed : "N/A";

  document.getElementById("wind-gust").textContent =
    wind.gust !== undefined ? wind.gust : "N/A";

  document.getElementById("weather-display").classList.add("visible");
}

document
  .getElementById("get-weather-btn")
  .addEventListener("click", () => {
    const city = document.getElementById("city-select").value;

    if (!city) {
      return;
    }

    showWeather(city);
  });
