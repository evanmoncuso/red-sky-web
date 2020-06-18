import { useState } from 'react'
import WeatherCell from 'src/components/WeatherCell'
import Layout from 'src/layouts/WeatherLayout'

const HomePage = () => {
  const [selectedSol, setSelectedSol] = useState(0)
  return (
    <Layout pageName="home" sol={selectedSol} setSelectedSol={setSelectedSol}>
      <WeatherCell sol={selectedSol} />
    </Layout>
  )
}

export default HomePage
