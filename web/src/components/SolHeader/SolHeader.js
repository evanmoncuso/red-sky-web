import { useState } from 'react'
import SolCell from 'src/components/SolCell'
import './styles.css'

const WeatherHeader = ({ sol, setSelectedSol }) => {
  const sols = ['549', '550', '551']

  return (
    <header className="sol-header">
      {/* <div className="sol-indicator">
        <select
          value={sol}
          onChange={(event) => setSelectedSol(+event.target.value)}
        >
          {sols.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div> */}
      <SolCell />
    </header>
  )
}

export default WeatherHeader
