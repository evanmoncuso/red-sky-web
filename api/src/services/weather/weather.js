import fetch from 'node-fetch'

export const getWeather = async ({ sol }) => {
  if (sol === 0)
    return {
      sol,
      atmosphericTemperature: 0,
      highTemp: 0,
      lowTemp: 0,
      horizontalWindSpeed: 0,
      atmosphericPressure: 0,
      season: '--',
    }

  const res = await fetch(
    `https://s3.amazonaws.com/static.moncuso.com/red-sky/${sol}.json`
  )

  if (!res.ok) {
    throw new Error('Something went wrong')
  }

  const json = await res.json()

  return {
    sol,
    atmosphericTemperature: json.AT.av,
    highTemp: json.AT.mn,
    lowTemp: json.AT.mx,
    horizontalWindSpeed: json.HWS.av,
    atmosphericPressure: json.PRE.av,
    season: json.Season,
  }
}
