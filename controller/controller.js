const { default: axios } = require("axios")





const loadHome = (req,res)=>{
    res.render("home")
}

const getWeather = async (req,res)=>{
    try {
        const city = req.body.city
        const apiKey = process.env.API_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

        const response = await axios.get(url)
        const weatherData = response.data;
        console.log(weatherData)
        const weatherInfo = {
            location: `${weatherData.name}, ${weatherData.sys.country}`,
            temp: weatherData.main.temp,
            windSpeed: weatherData.wind.speed,
            sunset: new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(),
            
        };
        console.log(weatherInfo);
        
        res.json(weatherInfo);
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
}



module.exports = {
    loadHome,
    getWeather
    

}