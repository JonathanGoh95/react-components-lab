import WeatherIcon from "./WeatherIcon"

const WeatherData = ({day,img,imgAlt,conditions,time}) => {
    return(
        <div className='weather'>
            <h2>{day}</h2>
            <WeatherIcon img={img} alt={imgAlt}/>
            <p><span>conditions: </span>{conditions}</p>
            <p><span>time: </span>{time}</p>
        </div>
    )
}

export default WeatherData