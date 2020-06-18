import './styles.css'

const PageHeader = () => {
  return (
    <header className="page-header">
      <h1>Red Sky</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="120px">
        <g>
          <rect x="0" y="0" width="100%" height="80px" fill="#984063"></rect>
          <circle cx="50%" cy="80px" r="30px" fill="#fe9677"></circle>
          <rect x="0" y="80px" width="100%" height="40px" fill="#41436a"></rect>
        </g>
      </svg>
    </header>
  )
}

export default PageHeader
