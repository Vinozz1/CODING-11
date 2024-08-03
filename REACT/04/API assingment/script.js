document.addEventListener('DOMContentLoaded', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
  
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY&units=metric`)
          .then(response => response.json())
          .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
  
            document.getElementById('weather-info').textContent = `Weather: ${weatherDescription}, ${temperature}°C`;
  
            if (weatherDescription.includes('rain')) {
              document.body.style.backgroundImage = "url('aespawallpaper.jpg')";
            } else if (weatherDescription.includes('cloud')) {
              document.body.style.backgroundImage = "url('aespawallpaper.jpg')";
            } else {
              document.body.style.backgroundImage = "url('aespawallpaper.jpg')";
            }
          })
          .catch(err => console.error(err));
      }, error => {
        console.error("Geolocation failed: ", error);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  });