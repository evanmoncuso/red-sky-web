import fetch from 'node-fetch'

export const handler = async ({ sol }) => {
  const key = process.env.NASA_API_KEY

  const res = await fetch(
    'https://s3.amazonaws.com/static.moncuso.com/red-sky/insight_weather.json'
  )

  if (!res.ok) {
    throw new Error('Something went wrong')
  }

  const json = await res.json()

  const solData = json[sol]

  if (!solData) {
    throw new Error('Unable to get data for that sol')
  }

  return {
    sol,
    atmosphericTemperature: solData.AT.av,
    horizontalWindSpeed: solData.HWS.av,
    atmosphericPressure: solData.PRE.av,
    season: solData.season,
  }
}
