import './WeatherForecast.css'
import WeatherData from './WeatherData';

const WeatherForecast = (props) => {
    return(
        <WeatherData {...props}/>
    )
}

export default WeatherForecast;