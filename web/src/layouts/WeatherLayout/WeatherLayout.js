import PageHeader from 'src/components/PageHeader'
import SolCell from 'src/components/SolCell'

const WeatherLayout = ({ children, pageName = '', sol, setSelectedSol }) => {
  const pageClasses = `page ${pageName}`
  return (
    <>
      <PageHeader pageName={pageName} />
      <SolCell sol={sol} setSelectedSol={setSelectedSol} />
      <main className={pageClasses}>{children}</main>
    </>
  )
}

export default WeatherLayout
