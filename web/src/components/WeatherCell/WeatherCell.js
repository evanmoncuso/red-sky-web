import { useState } from 'react'
import WeatherChart from 'src/components/WeatherChart'
import WeatherDetails from 'src/components/WeatherDetails'
import WeatherMain from 'src/components/WeatherMain'

export const QUERY = gql`
  query($sol: Int!) {
    weather: getWeather(sol: $sol) {
      sol
      atmosphericTemperature
      highTemp
      lowTemp
      horizontalWindSpeed
      atmosphericPressure
      season
    }
  }
`

export const Loading = () => (
  <div>
    <div className="content-main">Loading...</div>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ weather }) => {
  return (
    <div>
      <WeatherDetails
        windSpeed={weather.horizontalWindSpeed}
        pressure={weather.atmosphericPressure}
      />
      <WeatherMain
        currentTemp={weather.atmosphericTemperature}
        high={weather.highTemp}
        low={weather.lowTemp}
      />
      <WeatherChart />
    </div>
  )
}
