async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById('city-name').innerText = data.name;
    document.getElementById('temperature').innerText = `🌡️ ${data.main.temp}°C`;
    document.getElementById('description').innerText = `☁️ ${data.weather[0].description}`;
  } else {
    document.getElementById('city-name').innerText = 'City not found 😔';
    document.getElementById('temperature').innerText = '';
    document.getElementById('description').innerText = '';
  }
}
