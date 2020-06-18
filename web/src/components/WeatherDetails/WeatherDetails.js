import './styles.css'

const WeatherDetails = ({ windSpeed, pressure }) => {
  return (
    <section className="flex-container align-center weather-details">
      <div className="content-main flex-container row justify-between align-center">
        <p className="flex-1">
          <b>Wind: </b>
          {windSpeed} m/s
        </p>
        <p className="flex-1">
          <b>Humidity: --</b>
        </p>
        <p className="flex-1">
          <b>Dew Pt: --</b>
        </p>
        <p className="flex-1">
          <b>UV Index: </b>
          ~43
        </p>
        <p className="flex-1">
          <b>Visibility: --</b>
        </p>
        <p className="flex-1">
          <b>Pressure: </b>
          {pressure} pa
        </p>
      </div>
    </section>
  )
}

export default WeatherDetails
