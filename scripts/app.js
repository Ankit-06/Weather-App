const body = document.body;
const form = document.querySelector("form");
const display = document.querySelector(".details");
const img = document.querySelector("img.time");

const displayWeatherInfo = (data) => {
  const { cityInfo, weatherInfo } = data;

  let html = `
        <h5 class="my-3">${cityInfo.EnglishName}</h5>
        <div class="my-3" id="displayWeather">${weatherInfo.WeatherText}</div>
        <div class="display-4 my-4">
          <span>${weatherInfo.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
        </div>
  `;
  display.innerHTML = html;

  // updating img and background color
  if (weatherInfo.IsDayTime) {
    img.setAttribute("src", "./img/day.svg");
    body.style.backgroundColor = "#fafafa";
  } else {
    img.setAttribute("src", "./img/night.svg");
    body.style.backgroundColor = "#121212";
  }
};

const getInfo = async (cityName) => {
  const cityInfo = await getCity(cityName);
  const weatherInfo = await getWeather(cityInfo.Key);
  return { cityInfo, weatherInfo };
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let cityName = form.city.value.trim();

  getInfo(cityName)
    .then((data) => displayWeatherInfo(data))
    .catch((error) => {
      img.setAttribute(
        "src",
        "https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
      );
      body.style.backgroundColor = "crimson";
      let html = `
        <h1>Location Not Found!</h5>
        <strong> Try some another location!<strong>
      `;
      display.innerHTML = html;
    });

  localStorage.setItem("city", cityName);

  form.reset();
});

let cityName = localStorage.getItem("city");
if (cityName) {
  getInfo(cityName)
    .then((data) => displayWeatherInfo(data))
    .catch((error) => console.log(error));
}
