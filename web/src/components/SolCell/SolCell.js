import { useEffect } from 'react'
import './styles.css'

export const QUERY = gql`
  query {
    sols: getSols {
      title
    }
  }
`

export const Loading = () => (
  <header className="sol-header">
    <div className="content-main sol-indicator">Loading...</div>
  </header>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ sols, sol, setSelectedSol }) => {
  useEffect(() => {
    if (!sol) {
      const s = sols[sols.length - 1].title || 0
      setSelectedSol(+s)
    }
  }, [sols])

  return (
    <header className="sol-header">
      <div className="content-main sol-indicator">
        <select
          value={sol}
          onChange={(event) => setSelectedSol(+event.target.value)}
        >
          {sols.map(({ title }) => (
            <option key={title} value={title}>
              Martian Sol: {title}
            </option>
          ))}
        </select>
      </div>
    </header>
  )
}
