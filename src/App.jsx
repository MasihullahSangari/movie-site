import './App.css'

const Card = ({ title, year, rating }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-year">Year: {year}</p>
      <p className="card-rating">⭐ {rating}</p>
    </div>
  )
}

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">Netflix Movies</h1>

      <div className="card-container">
        <Card title="Inception" year={2010} rating={8.8} />
        <Card title="Interstellar" year={2014} rating={8.6} />
        <Card title="The Dark Knight" year={2008} rating={9.0} />
      </div>
    </div>
  )
}

export default App
