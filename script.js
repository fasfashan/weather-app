let weather = {
  apiKey: "38a25d128d05f52e23dc3059b4c16e40",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
      .then((response) => {
        if (response.ok) {
          return response.json().then;
        } else if (!response.ok) {
          alert("City not found");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText = "Humidity " + humidity;
    document.querySelector(".speed").innerText = "Wind speed: " + speed;
    document.querySelector(".celcius").innerText = temp + "℃";
  },
  search: function () {
    this.fetchWeather(document.querySelector("input").value);
  },
};

searchCity = document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".form-control").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});
