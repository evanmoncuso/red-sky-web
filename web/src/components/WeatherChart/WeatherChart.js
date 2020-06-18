import { useEffect, useState } from 'react'

import './styles.css'

function humanTimeFromHour(h) {
  if (h === 0) {
    return ['12', 'am']
  } else if (h < 12) {
    return [`${h}`, 'am']
  } else if (h === 12) {
    return ['12', 'pm']
  } else {
    return [`${h - 12}`, 'pm']
  }
}
//                 y1={i % 2 !== 0 ? 12 : 10}
//                 y2={10}
const WeatherChart = () => {
  const [width, setElWidth] = useState(0)
  const hours = Array.from({ length: 24 }, (e, i) => humanTimeFromHour(i))

  useEffect(() => {
    const element = document.getElementById('hourly-chart')
    setElWidth(element.clientWidth)
  }, [])

  return (
    <section className="content-main weather-chart">
      <div
        id="hourly-chart"
        className="flex-container justify-center align-center"
      >
        <p>A Cold Barren Hellscape</p>
      </div>
      <svg height="60" width="100%">
        <g>
          {hours.map((_, i) => {
            const w = i * (width / 24) || 1
            return (
              <line
                key={i}
                x1={w}
                x2={w}
                y1={5}
                y2={i % 2 !== 0 ? 10 : 13}
                stroke="black"
                strokeWidth="1"
              />
            )
          })}
        </g>
        <g>
          {hours.map((v, i) => {
            if (i % 2 !== 0) return null
            const w = i * (width / 24) - 10
            return (
              <text key={v} x={w > 0 ? w : 0} y="50">
                {v}
              </text>
            )
          })}
        </g>
      </svg>
    </section>
  )
}

export default WeatherChart
