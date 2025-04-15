# Weather Search App

A simple weather search app built with **React + TypeScript + Vite**. Users can enter a city name to view the current weather information.

## ✨ Features

- Input a city name to fetch current weather data
- Displays:
  - Temperature (°C)
  - Humidity (%)
  - Weather condition (e.g. Clear, Clouds)
  - Weather description (e.g. light rain)
  - Wind speed
  - Feels-like temperature

## 🛠 Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [OpenWeatherMap API](https://openweathermap.org/current)

## 📦 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
2. **Install dependencies**
   ```bash
   npm install
3. **Run the app**
   ```bash
   npm run dev

## 🔑 Getting an API Key
This project uses OpenWeatherMap API. To fetch weather data, you’ll need to:

- Sign up for an account on OpenWeatherMap

- Generate your free API key

- Replace the key in the fetch URL inside the code:
// Example:
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric

## 🚧 To Be Improved (Future Ideas)
- Add loading and error UI states

- Support weather for current location (via geolocation API)

- Display weather icons

- Improve styling and user experience
````
