import './WeatherForecast.css'
import WeatherData from './WeatherData';

const WeatherForecast = ({day,img,imgAlt,conditions,time}) => {
    return(
            <WeatherData day={day} conditions={conditions} img={img} alt={imgAlt} time={time}/>
    )
}

export default WeatherForecast;