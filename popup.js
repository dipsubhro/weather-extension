const CITY = "kalyani"; // Replace with your desired city

async function getWeather() {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=2aaec5842a6567eeffb47155af61556f&units=metric`
    );
    const data = await res.json();
    console.log(data);
    const temp = data.main.temp;
    const condition = data.weather[0].main;

    document.getElementById(
      "weather"
    ).innerText = `${CITY}: ${temp}°C, ${condition}`;
  } catch (err) {
    document.getElementById("weather").innerText = "Failed to fetch weather.";
    console.log(err);
  }
}

getWeather();
