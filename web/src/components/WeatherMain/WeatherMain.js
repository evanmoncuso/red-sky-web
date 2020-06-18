import './styles.css'

const WeatherMain = ({ currentTemp, low, high }) => {
  return (
    <section className="content-main weather-main column flex-container justify-center align-center">
      <div className="flex-container flex-2 row justify-center">
        <svg height="84" width="84">
          <g>
            <circle cx="42" cy="42" r="20" fill="#fe9677" />
          </g>
        </svg>
        <div className="flex-container column justify-center information">
          <h3>{Math.round(currentTemp)}&deg; and Clear.</h3>
          <div className="flex-container row justify-between">
            <p>
              <b>Feels like: </b>
              MARS
            </p>
            <p>
              <b>Low: </b>
              {low}
            </p>
            <p>
              <b>High: </b>
              {high}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-container flex-2">
        <h4>It feels like another planet out there!</h4>
      </div>
    </section>
  )
}

export default WeatherMain
